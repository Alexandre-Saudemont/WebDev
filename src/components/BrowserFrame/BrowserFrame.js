import './BrowserFrame.css';

/* Habille une capture de projet d'un chrome de navigateur (pastilles +
   domaine réel) : le screenshot brut devient un mockup crédible. */
export default function BrowserFrame({ url, children }) {
	let host = '';
	try {
		host = url ? new URL(url).hostname.replace(/^www\./, '') : '';
	} catch {
		host = '';
	}

	return (
		<div className="bframe">
			<div className="bframe-bar" aria-hidden="true">
				<span className="bframe-dots">
					<i />
					<i />
					<i />
				</span>
				{host && <span className="bframe-url">{host}</span>}
				<span />
			</div>
			{children}
		</div>
	);
}
