"use client"
import { beaufort } from "@/fonts";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { DragEventHandler, useState } from "react";

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

type BoardData = {
    href?: string;
}

const initBoardData: Map<number, BoardData> = new Map()
Array.from({ length: 28 }).map((_b, i) => (initBoardData.set(i, {} as BoardData)))


export default function Teamfight() {
    const mappedBoard = (initBoardData);
    const [board, setBoard] = useState([...mappedBoard])
    const [dragging, setDragging] = useState<string>("");

    const { data } = useQuery<[string, [string, TFTEntry][]]>({
        queryKey: ["TEAMFIGHT"],
        queryFn: async () => {
            const versions: string[] = await (await fetch("https://ddragon.leagueoflegends.com/api/versions.json")).json()
            const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${versions[0]}/data/en_US/tft-champion.json`)
            const data: { data: { [key: string]: TFTEntry } } = await response.json();
            return [versions[0], Object.entries(data.data)]
        }
    })

    const handleDragStart: DragEventHandler<HTMLDivElement> = (e) => {
        setDragging(e.currentTarget?.querySelector('img')?.dataset?.src || "");
    };

    const handleDragEnter: DragEventHandler<SVGSVGElement> = (e) => {
        // console.log(e.currentTarget?.id)
        if(e.currentTarget.id && parseInt(e.currentTarget.id) < 28) {
            mappedBoard.set(parseInt(e?.currentTarget?.id), { href: dragging } as BoardData)
            setBoard([...mappedBoard])
        }
    };

    return <section className="pt-30 w-5/6 mx-auto">
        <div className="grid grid-cols-7">
            {board.map(([k, v]) => (
                <svg key={k} id={k.toString()} height={100} width={100} xmlns="http://www.w3.org/2000/svg" onClick={handleDragEnter} onDragEnterCapture={handleDragEnter}>
                    <pattern id={`img${k}`} patternUnits="userSpaceOnUse" height={200} width={200}>
                        {v?.href && <image x={-80} y={0} href={v?.href} height={100} width={180} />}
                    </pattern>
                    <polygon
                        points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                        fill={`url(#img${k})`}
                        className={`stroke-3 stroke-gold-1 ${v?.href ? `` : "fill-transparent"}`}
                    />
                </svg>))}
        </div>
        <section className="grid grid-cols-2 lg:grid-cols-8 gap-3 py-10">
            {data?.[1]?.filter(([key]) => !key.toLowerCase().includes("tutorial"))?.sort((a, b) => a?.[1].tier - b?.[1].tier).map(([key, value]) => (
                <div key={key} className={`relative ${beaufort.className}`} draggable onDragStart={handleDragStart} onDragEnd={() => setDragging("")}>
                    <p className="absolute bottom-0 inline px-3 bg-hextech-black">{value.name}</p>
                    <p className="absolute bottom-0 right-0 inline px-1 bg-hextech-black">{value.tier}</p>
                    <Image className="object-cover" data-src={`https://ddragon.leagueoflegends.com/cdn/${data?.[0]}/img/tft-champion/${value.image.full}`} alt={value.name} src={`https://ddragon.leagueoflegends.com/cdn/${data?.[0]}/img/tft-champion/${value.image.full}`} height={600} width={600} />
                </div>
            ))}
        </section>
    </section >
}
