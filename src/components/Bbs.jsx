import React from 'react';

function OpenClose({ className, plus }) {
	return <span className={'Cur(p) ' + className}>[{plus ? '+' : '-'}]</span>;
}

function QuoteLoc({ className, loc }) {
	return <span className={'Cur(p) ' + className}>@Loc{loc}</span>;
}

function QuoteText({ className, text }) {
	return <span className={'Cur(p) D(b) ' + className}>&gt;{text}</span>;
}

export default class Bbs extends React.Component {
	render() {
		return <div className="Maw($xl) Mx(a)">
			<h2>BBS</h2>
			
			<div>
				<div className="Bgc(white) BdT Bdtc($gray3) Cf">
					<h3 className= "Mx($2)">
						<OpenClose className="C($blue) C($cyan):h Va(tb)"/> Boku no Hero Academia
					</h3>
					<img src="http://is2.4chan.org/a/1530763110279.jpg" className="Fl(start)--sm Maw(250px) Mah(250px) Mend($2) D(b)--smDown Mx(a)--smDown"/>
					<div className="Fz($4) Fw($n) Mx($2) Cl(b)--smDown">
						<span className="C($green) Fw($b1)">无名氏</span><span className="C($red) Fl(end)">Loc1</span>
					</div>
					<div className="Mx($2)">I love <strong>moe-girl</strong><br/>Going to dump a chapter from <em>Ai-chan</em> comic anthology</div>
					<div className="Cl(b)--mdDown">
						<div className="Mx($2) Fz($90)">
							<OpenClose className="C($blue) C($cyan):h Fw(b) Va(tb)" plus/> 468 replies collapsed
							<span className="Fl(end)"><span className="C($gray6)">Loc1 | 2013-07-15 11:50</span> <span className="Cur(p) C($gray6) C($red):h Va(tb)">[reply]</span></span>
						</div>
						<div>
							<div className="Bgc($gray1) BdT Bdtc($gray2) Ov(a) Cl(b)--mdDown">
								<img src="http://is2.4chan.org/a/1530763110279.jpg" className="Fl(start)--sm Maw(125px) Mah(125px) Mend($2) D(b)--smDown Mx(a)--smDown"/>
								<div className="Fz($4) Fw($n) Mx($2) Cl(b)--smDown">
									<span className="C($green) Fw($b1)">无名氏</span><span className="C($red) Fl(end)">Loc1</span>
								</div>
								<div className="Mx($2)"><QuoteLoc className="C($red)" loc="1"/> <QuoteLoc className="C($red)" loc="1"/> 反响：起初比较冷，回复惨淡。连载到最后5章时读者开始多了一些，<br/><QuoteText className="C($green)" text="dsf"/>尤其是结局时催得比较厉害，另有热心读者伪更番外，十分感动。</div>
								<div className="Cl(b)--lgDown">
									<div className="Mx($2) Fz($90)">
										<OpenClose className="C($blue) C($cyan):h Fw(b) Va(tb)" plus/> 468 replies collapsed
										<span className="Fl(end)"><span className="C($gray6)">Loc1 | 2013-07-15 11:50</span> <span className="Cur(p) C($gray6) C($red):h Va(tb)">[reply]</span></span>
									</div>
									<div>
										<div className="Bgc($gray2) BdT Bdtc($gray3) Ov(a) Cl(b)--lgDown">
											<div className="Mx($2)">
												<span className="C($green) Fw($b1)">无名氏</span>: <QuoteLoc className="C($red)" loc="1"/> I dont bully alpha posters until they claim that 9a was the only reason to watch this show.
												<span className="Fl(end) Fz($90)"><span className="C($gray6)">Loc1 | 2013-07-15 11:50</span> <span className="Cur(p) C($gray6) C($red):h Va(tb)">[reply]</span></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>;
	}
}