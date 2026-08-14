import ReviewCard from './ReviewCard'
import { Divider, LinearProgress, Rating } from '@mui/material'

const Review = () => {
    const ratings = [
        { label: "Excellent", value: 80, count: 19259 },
        { label: "Very Good", value: 30, count: 19259 },
        { label: "Good", value: 25, count: 19259 },
        { label: "Average", value: 20, count: 19259 },
        { label: "Poor", value: 10, count: 19259 },
    ]

    return (
        <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">

            <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">

                <img
                    src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/watch/v/v/a/-watermarked-original-imahz8xugkedg96f.jpeg?q=90"
                />

                <div>
                    <div>
                        <p className="font-bold text-xl">
                            Fossil Analog Watch
                        </p>

                        <p className="text-lg text-gray-600">
                            Men's Golden Watch
                        </p>
                    </div>

                    <div>
                        <div className="price flex items-center gap-3 mt-5 text-2xl">

                            <span className="font-sans text-gray-800">
                                ₹ 20,000
                            </span>

                            <span className="line-through text-gray-400">
                                ₹ 33,333
                            </span>

                            <span className="text-primary font-semibold">
                                60%
                            </span>

                        </div>
                    </div>
                </div>

            </section>


            <section className="w-full space-y-5 mt-8 mb-8">

                <div className="border border-gray-300 rounded-lg p-6">

                    <h2 className="text-2xl font-semibold mb-5">
                        Review & Ratings
                    </h2>

                    <div className="flex items-center gap-4 mb-8">

                        <Rating
                            value={4.5}
                            precision={0.5}
                            readOnly
                            size="large"
                        />

                        <span className="text-gray-400 text-lg">
                            Ratings
                        </span>

                    </div>

                    <div className="space-y-5">

                        {ratings.map((rating) => (
                            <div
                                key={rating.label}
                                className="flex items-center gap-5"
                            >

                                <span className="w-24 text-lg text-gray-600">
                                    {rating.label}
                                </span>

                                <LinearProgress
                                    variant="determinate"
                                    value={rating.value}
                                    sx={{
                                        flex: 1,
                                        height: 10,
                                        borderRadius: 5,
                                        backgroundColor: "#D1D5DB",

                                        "& .MuiLinearProgress-bar": {
                                            borderRadius: 5,
                                            backgroundColor:
                                                rating.label === "Excellent"
                                                    ? "#388E3C"
                                                    : rating.label === "Very Good"
                                                    ? "#4CAF50"
                                                    : rating.label === "Good"
                                                    ? "#009688"
                                                    : rating.label === "Average"
                                                    ? "#A67C00"
                                                    : "#D32F2F",
                                        },
                                    }}
                                />

                                <span className="w-20 text-gray-400">
                                    {rating.count}
                                </span>

                            </div>
                        ))}

                    </div>

                </div>

                <div className="space-y-3">

                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
                        <div
                            key={index}
                            className="space-y-3"
                        >
                            <ReviewCard />
                            <Divider />
                        </div>
                    ))}

                </div>

            </section>

        </div>
    )
}

export default Review