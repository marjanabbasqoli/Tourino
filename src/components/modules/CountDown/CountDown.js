import Countdown from "react-countdown";

function CountDown({ stopCountdown, resendHandler, setStopCountdown }) {
	const now = Date.now();
	const counterTime = Date.now() + 1 * 60 * 1000; //1.5 minutes

	const CompletedButton = () => (
		<button
			onClick={resendHandler}
			className="text-primary text-sm p-1 mt-4 mb-6"
			type="button"
		>
			ارسال مجدد کد تایید
		</button>
	);

	const timerRenderer = ({ completed, formatted }) => {
		if (completed) return <CompletedButton />;
		else
			return (
				<div className="text-grayDark text-sm p-1 mt-4 mb-6" dir="rtl">
					{formatted.minutes}:{formatted.seconds}&nbsp;
					<span> تا ارسال مجدد کد </span>
				</div>
			);
	};

	return (
		<Countdown
			date={stopCountdown ? now : counterTime}
			key={now}
			renderer={timerRenderer}
			zeroPadTime={2}
			onComplete={() => setStopCountdown(true)}
		>
			<CompletedButton />
		</Countdown>
	);
}

export default CountDown;
