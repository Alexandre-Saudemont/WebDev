import './PhoneFrame.css';

/* Cadre de smartphone pour les captures mobiles, pendant de BrowserFrame */
export default function PhoneFrame({ children }) {
	return (
		<div className="pframe">
			<span className="pframe-notch" aria-hidden="true" />
			<div className="pframe-screen">{children}</div>
		</div>
	);
}
