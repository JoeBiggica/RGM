import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Head from 'next/head';

const domain = 'https://www.fongshungga.com';

class SiteHead extends PureComponent {

	static propTypes = {
		meta: PropTypes.arrayOf(
			PropTypes.shape({
				tag: PropTypes.string.isRequired,
				props: PropTypes.object.isRequired,
			})
		).isRequired,
	}

	static defaultProps = {
		meta: [],
	}

	renderTag = ({tag: Tag, props}, index) => (
		<Tag key={`tag-${index}`} {...props} />
	);

	componentDidMount() {
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'UA-158726478-1');
	}

	render() {
		return (
			<Head>
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta httpEquiv='x-dns-prefetch-control' content='on' />
				<meta name='viewport' content='width=device-width, user-scalable=no' />
				<meta name='robots' content='index, follow' />
				<title>Fong's Hung Ga</title>

				<meta name='description' content="The Fong's Hung Ga Official Website" />
				<meta name='keywords' content='kung fu florida,kung fu fl,kung fu south fl,kung fu south florida,sifu fong,kwong wai lum,bill fong,william fong,sifu morrison,maurice morrison,hung gar,hung ga,hong jia,hong,chia,hung gar kung fu,hung ga kung fu,hung fist,frank yee,yee chee wai,kung fu,gung fu,gong fu,chi gong,tai chi,bagua,pa kua,baguazhang,ba gua zhang,chen tai chi,yang tai chi,taiji,shaolin,south shaolin,southern,lion dance,horse stance,wong fei hung,luk ah choi,wong kei ying,gee shim,abbot gee shim,hung hei gune,tang fong,tang fung,yuen ling,lam sai wing,tit kiu sam,wire,iron wire,dat mo,boddiharma,buddhist,karate,tiger,dragon,leopard,snake,crane,water,gold,metal,wood,fire,earth,five animals,5 animals,five elements,5 elements,self defence,iron palm,broadsword,pole,staff,butterfly swords,general kwan,guan gong,kwan ti,kwan gung,kwan yiu,liu bei,health,fitness,club,exercise,mind,body,spirit,chinese bodywork,qi gong,chi gung,meditation,inside kung fu,strecthing,chinese new year,alter,respect,discipline,mental concentration,throws,locking,techniques,eighteen lohan,new martial hero,self esteem,confidence,weapons,fighting,sparring,disabling,dim mak,mandarin,cantonese,china,chinese,ground fighting,tiger claw,hsing yi,shanghai,crane beak,fist,claw,paw,flying,ng,long,ba gua,gwun,gi mo cern do,hang yuet dan dao,cheunrg,tiger crane form,shaolin temple,monk,ba shing ba zu bagua zhang,free trial,private,complementary,group classes,forms,strikes,tiger fork,kwan dao,spear,kids,children,focus,school,zen,chan,black belt,long fist,yue jia siba fist,drunken fist,cha fist,luohan,long xing,lung,double broadswords,spring fall kwan dao,double end staff,huang long,meteor hammer,flying weight,fourth generation,tai shan,disciple,sensei,sifu,si gung,dai si gung,si jo,cum na,cum la sao,bong sao,tan sao,chee ji,sup ji kuen,ji jing san,dong hai chuan,wrestling,master,ngau gwat sin,successor,kung pao,real kung fu,dit da,drum,symbols,yees hung ga kung fu association,praying mantis,wing chun,united states traditional kung fu wushu federation,lessons,strength,yang style,push hands,ancestors,chi sao,ging,tae kwon do,fa jing,ki,lee,mok,choy,fut,hung,kwa,lau,sensitivity drills,sweat,pleasure,gung ji fuk fu,fu hok serng ying kuen,fu hok,double fist form,ng ying kuen,tiet sin kuen,fuk fu kuen,dat mo yit gan ging,fu jow gung,heavy bag,bag work,circle kick,kick,side kick,tiger tail kick,fu mei gerk,mo ying gerk,shadowless kick,ten killing hands,sup juet sao,eight strong techniques,ten tigers,eight cranes,eight stances,tiger and crane,champions,tournament wong fei hung,all kung fu,wong fei hung north eastern all kung fu championships,five formed fist,five animal fist,martial arts,chinese martial arts,chinese kung fu,ng ying,northern shaolin,chinatown new york,China,Hong Kong,Kuen,style,Martial Art,Sil Lum,Gung Fu,Wong Fei,Qi Gong,instruction,kwong,dojo,sihing,wing,simu,kwoon,movements,moves,palm,tradition,traditional,chi,fight,san shou,kickboxing,lohan,louhan,arhat,qigong,athletics,seminars,grappling,iron,hsing i,philosophy,taoism,wushu,buddhism,wah lum,tournament,competition' />

				<meta name='twitter:card' content='summary_large_image' />

				<meta property="fb:app_id" content="926660327777500"/>
				<meta name='og:title' property="Fong's Hung Ga" />
				<meta property='og:description' content="The official Fong's Hung Ga website" />
				<meta property="og:type" content="website" />
				<meta property='og:url' content='https://www.fongshungga.com/' />

				<meta name='msapplication-TileColor' content='#000000' />
				<meta name='msapplication-config' content='none' />
				<meta name='theme-color' content='#FF1815' />

				<link rel="canonical" href='https://www.fongshungga.com' />
				<link rel='shortcut icon' type='image/x-icon' href='https://www.fongshungga.com/static/favicon/favicon.png' />
				<link rel='icon' type='image/png' href='https://www.fongshungga.com/static/favicon/favicon.png' sizes='16x16' />
				<link rel='icon' type='image/png' href='https://www.fongshungga.com/static/favicon/favicon-32x32.png' sizes='32x32' />
				<link rel='icon' type='image/png' href='https://www.fongshungga.com/static/favicon/favicon-48x48.png' sizes='48x48' />
				<link rel='icon' type='image/png' href='https://www.fongshungga.com/static/favicon/favicon-96x96.png' sizes='96x96' />

				<script async src="https://www.googletagmanager.com/gtag/js?id=UA-158726478-1"></script>

				{this.props.meta.map(this.renderTag)}
			</Head>
		);
	}

}

const mapStateToProps = state => {
	return {
		meta: state.meta
	};
};

export default connect(mapStateToProps)(SiteHead);
