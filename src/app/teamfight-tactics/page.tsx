"use client"
import { beaufort } from "@/fonts";
import { Application, extend } from "@pixi/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Container, Graphics, Sprite } from "pixi.js";
import { useRef } from "react";

type TFTEntry = {
    id: string;
    image: {
        full: string;
        group: string;
        h: number;
        sprite: string;
        w: number;
        x: number;
        y: number;
    };
    name: string;
    tier: number;
}

extend({
    Graphics,
    Container,
    Sprite
})

const rows = [
    [0],
    [90],
    [180],
    [270],
    [360],
    [450],
    [540],
    [45, 80],
    [135, 80],
    [225, 80],
    [315, 80],
    [405, 80],
    [495, 80],
    [585, 80],
    [0, 160],
    [90, 160],
    [180, 160],
    [270, 160],
    [360, 160],
    [450, 160],
    [540, 160],
    [45, 240],
    [135, 240],
    [225, 240],
    [315, 240],
    [405, 240],
    [495, 240],
    [585, 240],
]

export default function Teamfight() {
    const tftRef = useRef(null);
    const { data } = useQuery<[string, [string, TFTEntry][]]>({
        queryKey: ["TEAMFIGHT"],
        queryFn: async () => {
            const versions: string[] = await (await fetch("https://ddragon.leagueoflegends.com/api/versions.json")).json()
            const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${versions[0]}/data/en_US/tft-champion.json`)
            const data: { data: { [key: string]: TFTEntry } } = await response.json();
            return [versions[0], Object.entries(data.data)] 
        }
    })

    console.log(data)

    return <section className="pt-30 w-5/6 mx-auto" ref={tftRef}>
        <Application autoStart height={400} sharedTicker background={"#0A1428"} className="mx-auto">
            {rows.map(([x, y]) => <pixiGraphics key={`${x},${y}`} draw={(graphics) => {
                graphics.clear();
                graphics.setFillStyle({ color: 'transparent' });
                graphics.setStrokeStyle({ color: '#F0E6D2', width: 3 })
                graphics.regularPoly(50, 50, 50, 6, 0)
                graphics.x = x
                graphics.y = y || 0
                graphics.fill();
                graphics.stroke();
            }} />)}
        </Application>

        <section className="grid grid-cols-2 lg:grid-cols-3 gap-3 py-10">
            {data?.[1]?.filter(([key]) => !key.toLowerCase().includes("tutorial"))?.sort((a, b) => a?.[1].tier - b?.[1].tier).map(([key, value]) => (
                <div key={key} className={`relative ${beaufort.className}`}>
                    <p className="absolute py-1 bottom-0 inline px-7 bg-hextech-black">{value.name}</p>
                    <p className="absolute py-1 bottom-0 right-0 inline px-3 bg-hextech-black">{value.tier}</p>
                    <Image className="object-cover" alt={value.name} src={`https://ddragon.leagueoflegends.com/cdn/${data?.[0]}/img/tft-champion/${value.image.full}`} height={600} width={600} />
                </div>
            ))}
        </section>
    </section>
}
