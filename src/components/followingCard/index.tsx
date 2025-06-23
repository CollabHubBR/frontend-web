export interface FollowingCardProps {
    name: string
    language: string
    description: string
}

export function FollowingCardComponent({
    name,
    language,
    description,
}: FollowingCardProps) {
    return (
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xs rounded-xl border border-gray-200 p-4 shadow-sm bg-white cursor-pointer hover:shadow-md transition-shadow duration-200 ease-in-out">
            <div className="flex items-center gap-2 mb-2">
                <img
                    src="assets/svg/box.svg"
                    alt="Box Icon"
                    className="w-5 h-5"
                />
                <h3 className="text-sm font-semibold text-gray-900 truncate">
                    {name}
                </h3>
            </div>

            <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

            <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                    <img
                        src="assets/svg/eye.svg"
                        alt="Views Icon"
                        className="w-4 h-4"
                    />
                    <span>113</span>
                </div>
                <div className="flex items-center gap-1">
                    <img
                        src="assets/svg/terminal.svg"
                        alt="Language Icon"
                        className="w-4 h-4"
                    />
                    <span>{language}</span>
                </div>
            </div>
        </div>
    )
}
