import React from 'react';
import { toHalfWidth } from '../utils';

function OpenClose({ className, plus }) {
	return <span className={'Cur(p) ' + className}>[{plus ? '+' : '-'}]</span>;
}

function QuoteLoc({ className, loc }) {
	return <span className={'Cur(p) ' + className}>@{loc}</span>;
}

function QuoteText({ className, text }) {
	return <span className={'Cur(p) D(b) ' + className}>＞ {text}</span>;
}

const mdConfig = {
	p:       { regex: /^([\s\S]+?)\s*\n\n+/,                                parse: (m, res) => <div          key={res.length} className="Mb($2)">{renderMarkdown(m[1], [])}</div> },
	pre:     { regex: /(?:^|\n)(?: {4}|\t)(.+)\s*?(?:\n|$)/,                parse: (m, res) => <pre        key={res.length} className="Px($1) Bgc($gray8) C($gray1) Ov(h)">{m[1]}</pre> },
	quote:   { regex: /(?:^|\n)(?:>|》|＞)\s+(.+)\s*?(?:\n|$)/,               parse: (m, res) => <blockquote key={res.length} className="C($green)">&gt; {m[1]}</blockquote> },
	list2:   { regex: /(?:^|\n)([0-9０-９０-９]+)(?:\. |、)\s*(.+)\s*?(?:\n|$)/, parse: (m, res) => <p          key={res.length} className="Pstart($4) C($indigo)">{toHalfWidth(m[1])} {m[2]}</p> },
	list:    { regex: /(?:^|\n)[-－ー]\s+(.+)\s*?(?:\n|$)/,                   parse: (m, res) => <p          key={res.length} className="Pstart($4) C($indigo)">● {m[1]}</p> },

	url2:    { regex: /<(https?:\/\/[^\s()]+)>/,                            parse: (m, res) => <a          key={res.length} href={m[1]}>{m[1]}</a> },
	url:     { regex: /(https?:\/\/[^\s()]+)(?=\s|$)/,                      parse: (m, res) => <a          key={res.length} href={m[1]}>{m[1]}</a> },
	image:   { regex: /!\[(.*?)\]\((https?:\/\/\S+)\)/,                     parse: (m, res) => <img        key={res.length} className="Va(tb) Maw(75px) Mah(75px) D(i)" src={m[2]} alt={m[1]}/> },
	link:    { regex: /\[(.+?)\]\((https?:\/\/\S+)\)/,                      parse: (m, res) => <a          key={res.length} href={m[2]}>{m[1]}</a> },
	loc:     { regex: /(?:@|＠)([0-9０-９０-９]+)(?=\s|$)/,                      parse: (m, res) => <span   key={res.length} className="Cur(p) C($red) Pend($1)">@{toHalfWidth(m[1])}</span> },
	strong2: { regex: /(\*\*\*|___)(?=[^\s*_])(.*?[^\s*_])\1/,              parse: (m, res) => <strong     key={res.length} className="Fs(i)">{m[2]}</strong> },
	strong:  { regex: /(\*\*|__)(?=[^\s*_])(.*?[^\s*_])\1/,                 parse: (m, res) => <strong     key={res.length}>{m[2]}</strong> },
	em:      { regex: /(\*|_)(?=[^\s*_])(.*?[^\s*_])\1/,                    parse: (m, res) => <em         key={res.length}>{m[2]}</em> },
	del2:    { regex: /~~~(?=\S)(.*?\S)~~~/,                                parse: (m, res) => <del        key={res.length} className="Bgc($gray9) Bgc(t):h">{m[1]}</del> },
	del:     { regex: /~~(?=\S)(.*?\S)~~/,                                  parse: (m, res) => <del        key={res.length}>{m[1]}</del> },
	code:    { regex: /`(.+?)`/,                                            parse: (m, res) => <code       key={res.length} className="Px($1) Bgc($gray8) C($gray1) Bdrs($1)">{m[1]}</code> },
};

function renderMarkdown(md, res) {
	for (var c of Object.keys(mdConfig).map(x => mdConfig[x])) {
		const m = c.regex.exec(md);
		if (m) {
			const ls = md.substr(0, m.index), rs = md.substr(m.index + m[0].length);
			if (ls) renderMarkdown(ls, res);
			const p = c.parse(m, res);
			res.push(p);
			if (rs) renderMarkdown(rs, res); 
			return res;
		}
	}

	res.push(md);
	return res;
}

function Markdown({ className, markdown, children }) {
	const res = [];
	renderMarkdown(markdown, res);
	return <div className={className}>
		{children}{res}
	</div>;
}

const bbsMock = {
	boards: {
		1: {
			id: 1,
			slag: 'a',
		},
	},
	posts: {
		2: {
			board: 1,
			image: 'http://i.4cdn.org/a/1531053933093s.jpg',
			title: 'Hataraku Saibou',
			markdown: 'I want to date a red blood cell!',
			replies: 164,
			submission: new Date('07/08/18(Sun)05:45:33').getTime(),
		},
		3: {
			parent: 2,
			image: 'http://i.4cdn.org/a/1531075769082s.jpg',
			markdown: '@4\nor is he?',
			submission: new Date('07/08/18(Sun)11:49:29').getTime(),
		},
		4: {
			parent: 3,
			markdown: '@5\nI imagine them all kind of confused, but happy. As in really, really drunk. They can still fight and everything, is just they swing from funny bro to psychotic bitch for no apparent reason.',
			submission: new Date('07/08/18(Sun)11:49:46').getTime(),
		},
		5: {
			parent: 2,
			image: 'http://i.4cdn.org/a/1531075795374s.jpg',
			markdown: '> that one shy platelet\ncute as heck',
			submission: new Date('07/08/18(Sun)11:49:55').getTime(),
		},
		6: {
			parent: 5,
			markdown: '@3\nDon\'t',
			submission: new Date('07/08/18(Sun)11:55:03').getTime(),
		},
		7: {
			parent: 5,
			image: 'http://s.4cdn.org/image/spoiler-a1.png',
			markdown: '@4\nThey\'re actually ~~~fated to be together.~~~',
			submission: new Date('07/08/18(Sun)11:57:19').getTime(),
		},
	},
};

function PostLevel1() {
	
}

export default class Bbs extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			md: '',
		};

		this.onInputChange = e => {
			const target = e.target;
			const value = target.type === 'checkbox' ? target.checked : target.value;
			const name = target.name;
		
			this.setState({
				[name]: value,
			});
		};
	}

	render() {
		return <div className="Maw($xl) Mx(a) Mih(1000px)">
			<h2>BBS</h2>
			
			<div>
				<div className="Bgc(white) BdT Bdtc($gray3) Cf">
					<h3 className= "Mx($2) Mb($1)">
						<OpenClose className="C($blue) C($cyan):h Va(tb)"/> Boku no Hero Academia
					</h3>
					<img alt="" src="http://is2.4chan.org/a/1530763110279.jpg" className="Fl(start)--sm Maw(250px) Mah(250px) Mend($2) D(b)--smDown Mx(a)--smDown"/>
					<div className="Fz($4) Fw($n) Mx($2) Cl(b)--smDown">
						<span className="C($green) Fw($b1)">无名氏</span><span className="C($red) Fl(end)">@1</span>
					</div>
					<div className="Mx($2)">I love <strong>moe-girl</strong><br/>Going to dump a chapter from <em>Ai-chan</em> comic anthology</div>
					<div className="Cl(b)--mdDown">
						<div className="Mx($2) Fz($90) C($gray6)">
							<OpenClose className="C($blue) C($cyan):h Va(tb)" plus/> 468 replies collapsed
							<span className="Fl(end)">
								<span className="Mend($2)">@1</span>
								<span className="Mend($2)">2013-07-15 11:50</span>
								<span className="Cur(p) C($blue) C($cyan):h Va(tb)">[reply]</span>
							</span>
						</div>
						<div>
							<div className="Bgc($gray1) BdT Bdtc($gray2) Ov(a) Cl(b)--mdDown">
								<img alt="" src="http://is2.4chan.org/a/1530763110279.jpg" className="Fl(start)--sm Maw(125px) Mah(125px) Mend($2) D(b)--smDown Mx(a)--smDown"/>
								<div className="Fz($4) Fw($n) Mx($2) Cl(b)--smDown">
									<span className="C($green) Fw($b1)">无名氏</span><span className="C($red) Fl(end)">@1</span>
								</div>
								<div className="Mx($2)"><QuoteLoc className="C($red)" loc="1"/> <QuoteLoc className="C($red)" loc="1"/> 反响：起初比较冷，回复惨淡。连载到最后5章时读者开始多了一些，<br/><QuoteText className="C($green)" text="dsf"/>尤其是结局时催得比较厉害，另有热心读者伪更番外，十分感动。</div>
								<div className="Cl(b)--lgDown">
									<div className="Mx($2) Fz($90) C($gray6)">
										<OpenClose className="C($blue) C($cyan):h Va(tb)" plus/> 468 replies collapsed
										<span className="Fl(end)">
											<span className="Mend($2)">@1</span>
											<span className="Mend($2)">2013-07-15 11:50</span>
											<span className="Cur(p) C($blue) C($cyan):h Va(tb)">[reply]</span>
										</span>									
									</div>
									<div>
										<div className="Bgc($gray2) BdT Bdtc($gray3) Ov(a) Cl(b)--lgDown Px($2)">
											<span className="C($green) Fw($b1)">无名氏</span>: <QuoteLoc className="C($red)" loc="1"/> I dont bully alpha posters until they claim that 9a was the only reason to watch this show.
											<span className="Fl(end) C($gray6) Fz($90)">
												<span className="Mend($2)">@1</span>
												<span className="Mend($2)">2013-07-15 11:50</span>
												<span className="Cur(p) C($blue) C($cyan):h Va(tb)">[reply]</span>
											</span>
										</div>
										<div className="Bgc($gray2) BdT Bdtc($gray3) Ov(a) Cl(b)--lgDown">
											<Markdown markdown={this.state.md} className="Mx($2) Wow(bw) Whs(pl)"><span className="Fl(start) Pend($1)"><span className="C($green) Fw($b1)">无名氏</span>:</span></Markdown>
											<textarea name="md" className="W(100%) D(b) Ff(m)" onInput={this.onInputChange}/>
											<span className="Fl(end) C($gray6)">
												<span className="Mend($2) Cur(p) C($cyan):h Va(tb)">[format tips]</span>
												<span className="Mend($2) Cur(p) C($red) C($orange):h Va(tb)">[send]</span>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="Bgc($gray1) BdT Bdtc($gray2) Ov(a) Cl(b)--mdDown">
								<img alt="" src="http://is2.4chan.org/a/1530763110279.jpg" className="Fl(start)--sm Maw(125px) Mah(125px) Mend($2) D(b)--smDown Mx(a)--smDown"/>
								<div className="Fz($4) Fw($n) Mx($2) Cl(b)--smDown">
									<span className="C($green) Fw($b1)">无名氏</span>
								</div>
								<Markdown markdown={this.state.md} className="Mx($2) Wow(bw) Whs(pl)"/>
								<textarea name="md" className="W(100%) D(b) Ff(m)" onInput={this.onInputChange}/>
								<input type="file" accept="image/*" className="Maw(100%)"/>
								<span className="Mstart($2) Cur(p) C($red) C($orange):h Va(tb)">[remove pic]</span>
								<span className="Fl(end) C($gray6)">
									<span className="Mend($2) Cur(p) C($cyan):h Va(tb)">[format tips]</span>
									<span className="Mend($2) Cur(p) C($red) C($orange):h Va(tb)">[send]</span>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="Bgc(white) BdT Bdtc($gray3) Cf">
					<h3 className= "Mx($2) Mb($1)">
						Boku no Hero Academia
					</h3>
					<img alt="" src="http://is2.4chan.org/a/1530763110279.jpg" className="Fl(start)--sm Maw(250px) Mah(250px) Mend($2) D(b)--smDown Mx(a)--smDown"/>
					<div className="Fz($4) Fw($n) Mx($2) Cl(b)--smDown">
						<span className="C($green) Fw($b1)">无名氏</span>
					</div>
					<div className="Mx($2)"><QuoteLoc className="C($red)" loc="1"/> <QuoteLoc className="C($red)" loc="1"/> 反响：起初比较冷，回复惨淡。连载到最后5章时读者开始多了一些，<br/><QuoteText className="C($green)" text="dsf"/>尤其是结局时催得比较厉害，另有热心读者伪更番外，十分感动。</div>
					<input type="text" className="W(100%)" placeholder="title..."/>
					<textarea className="W(100%) D(b) Ff(m)"/>
					<input type="file" accept="image/*" className="Maw(100%)"/>
					<span className="Mstart($2) Cur(p) C($red) C($orange):h Va(tb)">[remove pic]</span>
					<span className="Fl(end) C($gray6)">
						<span className="Mend($2) Cur(p) C($cyan):h Va(tb)">[format tips]</span>
						<span className="Mend($2) Cur(p) C($red) C($orange):h Va(tb)">[send]</span>
					</span>
				</div>
			</div>
		</div>;
	}
}