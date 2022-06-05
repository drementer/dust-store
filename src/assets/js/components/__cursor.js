import MouseFollower from "../vendors/__mouse-follower.js";
import Magnetic from "../vendors/__magnetic.js";
const cursor = () => {
	MouseFollower.registerGSAP(gsap);
	const cursor = new MouseFollower({
		stickDelta: 0.5,
	});

	let magnets = document.querySelectorAll("[data-magnetic]");
	// Init magnetic
	magnets.forEach((element) => {
		new Magnetic(element, {
			y: 0.5, // horizontal delta
			x: 0.5, // vertical delta
			s: 0.3, // speed
			rs: 0.2, // release speed
		});
	});
};

export default cursor;
