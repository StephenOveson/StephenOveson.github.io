"use client"
import { beaufort, spiegel } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import { FormEventHandler, useState } from "react"
interface FormState {
    name: string;
    email: string;
    description: string;
    phone?: string;
}

export default function Home() {
    const [form, setForm] = useState<FormState>({} as FormState)
    const [success, setSuccess] = useState("" as "Email sent" | "Failed to send Email");
    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const apiEndpoint = '/api/email';

        fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(form),
        })
            .then((res) => res.json())
            .then((response) => {
                setSuccess(response.message);
                setForm({} as FormState)
            })
            .catch((err) => {
                setSuccess("Failed to send Email");
                setForm({} as FormState)
            });
    }
    return <section className={`py-30 w-5/6 min-h-screen mx-auto ${beaufort.className}`}>
        <form onSubmit={onSubmit} className="grid gap-4">
            <h1 className="text-5xl border-b-2 border-gold-5 uppercase">Let's Collaborate</h1>
            <p className={`text-2xl ${spiegel.className}`}>Looking for a software developer who can solve your problems? Fill out the form below, and I will get back to you as soon as possible.</p>
            {success === "Email sent" ? <h2 className="text-2xl text-green-400">{success}</h2> : <h2 className="text-2xl text-red-500">{success}</h2>}
            <input className="rounded-sm p-4 border border-gold-5 text-xl text-white focus-visible:outline-gold-5 placeholder-gold-4/[0.3]" required placeholder="Name" type="text" name="name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            <input className="rounded-sm p-4 border border-gold-5 text-xl text-white focus-visible:outline-gold-5 placeholder-gold-4/[0.3]" required placeholder="example@email.com" type="email" name="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
            <textarea className="rounded-sm p-4 border border-gold-5 text-xl text-white focus-visible:outline-gold-5 placeholder-gold-4/[0.3]" required placeholder="Description of project" name="description" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
            <button className="py-3 rounded-sm bg-gold-5 text-2xl hover:cursor-pointer" type="submit">SUBMIT</button>
        </form>
    </section>
}