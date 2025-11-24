import { FC } from "react"

const GameCardSkeleton: FC = () => {
    return (
        <div
					className="m-5 h-fit flex flex-col w-full rounded-lg bg-[var(--color-card)] md:h-60 md:w-64"
				>
					<div className="aspect-video w-full animate-pulse rounded-tl-lg rounded-tr-lg bg-slate-600" />

					<div className="flex flex-grow w-full flex-col justify-between p-4 pl-2 pr-2">
						<div className="mt-2 h-4 w-full animate-pulse rounded-xl bg-slate-700" />

						<div className="mt-2 h-4 w-full animate-pulse rounded-xl bg-slate-700" />
					</div>
				</div>
    )
}


export default GameCardSkeleton