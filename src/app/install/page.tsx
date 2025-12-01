"use client";
import Button from "@/Components/UI/Button";
import { ReactElement, useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { MdDownloadForOffline } from "react-icons/md";

export default function Download(): ReactElement {
	const installApp = async () => {
		if (!installPrompt) {
			return;
		}
		const result = await installPrompt.prompt();
		// console.log(`Install prompt was: ${result.outcome}`);
		disableInAppInstallPrompt();
	};

	function disableInAppInstallPrompt() {
		setInstallPrompt(null);
	}
	const [installPrompt, setInstallPrompt] = useState<any>(null);
	useEffect(() => {
		window.addEventListener("beforeinstallprompt", (event) => {
			event.preventDefault();
			setInstallPrompt(event);
		});
	}, []);

	return (
		<div className="w-full">
			{/* <div className=" w-2/3 lg:w-auto lg:h-2/3 bg-red-600 aspect-square m-auto mt-5 mb-5"></div> */}
			{/* <Button className="mt-5" Icon={<FaDownload />}>Download</Button> */}

			<div className="w-full rounded-sm bg-[var(--color-accent)] p-4">
				<div className="">
					<MdDownloadForOffline
						size={90}
						className="m-auto text-white"
					/>
				</div>
				<Button className="mt-5" Icon={<FaDownload />} onClick={installApp}>
					Install
				</Button>
			</div>
		</div>
	);
}
