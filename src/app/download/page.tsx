import Button from "@/Components/UI/Button";
import { ReactElement } from "react";
import { FaDownload } from "react-icons/fa6";


export default function Download(): ReactElement {
	return (
		<div className="w-full">
			<div className=" w-2/3 lg:w-auto lg:h-2/3 bg-red-600 aspect-square m-auto mt-5 mb-5"></div>
			<Button className="mt-5" Icon={<FaDownload />}>Download</Button>
		</div>
	)
}