export function Feed() {
    // TODO: Componetizar os cards do feed
    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="w-full max-w-4xl text-start px-4">
                <h2 className="ml-6 text-xl sm:text-2xl md:text-3xl font-sans font-normal leading-none tracking-normal">
                    Feed
                </h2>
            </div>

            <div className="w-full max-w-4xl flex flex-col gap-4 px-4">
                {/* Card 1 */}
                <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-center gap-2">
                        <img
                            src="assets/svg/pie-chart-purple.svg"
                            alt=""
                            className="w-6 h-6 mt-1"
                        />
                        <h3 className="text-sm sm:text-base font-medium text-indigo-600">
                            {`{projeto}`}: Nova Enquete Aberta!
                        </h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <img
                            src="assets/svg/arrow-right-purple.svg"
                            alt=""
                            className="w-4 h-4 mt-1"
                        />
                        <p className="text-sm sm:text-base text-black">
                            Entre ser ou não ser, quem é você na fila do pão?
                        </p>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 pl-8">
                        Participe agora mesmo, antes que o tempo acabe!
                    </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-center gap-2">
                        <img src="assets/svg/pie-chart-red.svg" alt="" className="w-6 h-6 mt-1" />
                        <h3 className="text-sm sm:text-base font-medium text-indigo-600">
                            {`{projeto}`}: Enquete encerrada!
                        </h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="assets/svg/arrow-right-red.svg" alt="" className="w-4 h-4 mt-1" />
                        <p className="text-sm sm:text-base text-black">
                            Entre ser ou não ser, quem é você na fila do pão?
                        </p>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 pl-8">Confira já os resultados!</p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-center gap-2">
                        <img src="assets/svg/at-sign-orange.svg" alt="" className="w-6 h-6 mt-1" />
                        <h3 className="text-sm sm:text-base font-medium text-indigo-600">
                            123de_oliveira4 mencionou você...
                        </h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="assets/svg/arrow-right-orange.svg" alt="" className="w-4 h-4 mt-1" />
                        <p className="text-sm sm:text-base text-black">
                            @pangaré_da_guatemala pdp se fosse Cobol era mais rápido...
                        </p>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 pl-8">
                        Confira a menção para saber do que se trata...
                    </p>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-center gap-2">
                        <img src="assets/svg/award-yellow.svg" alt="" className="w-6 h-6 mt-1" />
                        <h3 className="text-sm sm:text-base font-medium text-indigo-600">
                            {`{projeto}`}: Milestone alcançado!
                        </h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="assets/svg/arrow-right-yellow.svg" alt="" className="w-4 h-4 mt-1" />
                        <p className="text-sm sm:text-base text-black">
                            Confira a conquista alcançada pela comunidade do projeto!
                        </p>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 pl-8">
                        Faça parte você também para ter parte nas novas conquistas!
                    </p>
                </div>
            </div>
        </div>
    );
}
