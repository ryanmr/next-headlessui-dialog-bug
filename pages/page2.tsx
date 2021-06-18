import Head from "next/head";
import { useState } from "react";
import { ModalPrompt } from "../components/ModalPrompt";
import Link from "next/link";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen flex items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <meta
          name="dialog - headless ui - tailwind - next"
          content="dialog - headless ui - tailwind - next"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-lg">
          dialog - headless ui - tailwind - next - page 2
        </h1>
        <p>
          This is a demo for dialog/modals, and how they break with routing.
        </p>
        <p>
          <Link href="/">
            <a className="underline text-blue-600 hover:text-blue-700">
              visit home page
            </a>
          </Link>{" "}
          after opening the dialog here
        </p>
        <div className="py-4">
          <button
            onClick={() => setOpen(true)}
            className="block p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            Open the dialog
          </button>
          <ModalPrompt key="page2" open={open} onClose={() => setOpen(false)} />
        </div>
      </div>
    </div>
  );
}
