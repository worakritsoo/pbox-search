import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
	type User = {
	name: String;
	links: [Link];
};

type Link = {
	title: String;
	author: Author;
	users_liked: [User];
	family_link: [Link];
};

type Author = {
	name: String;
	links: [Link];
};

type Query = {
	links: [Link];
	authors: [Author];
};
`;

module.exports = typeDefs;

const resolvers = {
	Query: {
		links: () => links
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
	console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);

type User = {
	name: String;
	links: [Link];
};

type Link = {
	title: String;
	author: Author;
	users_liked: [User];
	family_link: [Link];
};

type Author = {
	name: String;
	links: [Link];
};

type Query = {
	links: [Link];
	authors: [Author];
};

const links = [
	{
		title: 'การไฟฟ้าส่วนภูมิภาค',
		url: 'www.pea.co.th',
		prefix: 'กฟภ.',
		author: 'Worakrit Soontornthamniti'
	},
	{
		title: 'อินทราเน็ต การไฟฟ้าส่วนภูมิภาค',
		url: 'http://intranet.pea.co.th',
		prefix: 'กฟภ.',
		author: 'Leela'
	},
	{
		title: 'การไฟฟ้าส่วนภูมิภาค',
		url: 'www.pea.co.th',
		prefix: 'กฟภ.',
		user: 'Worakrit Soontornthamniti',
		content: 'some contnet'
	},
	{
		title: 'อินทราเน็ต การไฟฟ้าส่วนภูมิภาค',
		url: 'http://intranet.pea.co.th',
		prefix: 'กฟภ.',
		user: 'Worakrit Soontornthamniti'
	},
	{
		title: 'อินทราเน็ต กฟต.3',
		url: 'http://intra.pea.co.th/peas3',
		prefix: 'กฟต.3',
		user: 'Worakrit Soontornthamniti'
	},
	{
		title: 'การไฟฟ้าโปร่งใส กฟต.3 ประจำปี 2564',
		url: 'http://strms.pea.co.th/s3/2564/tprS3-64/home.php',
		user: 'Worakrit Soontornthamniti'
	},
	{
		title: 'เว็บไซต์ สำนักงานสีเขียว กฟต.3',
		url: 'http://greenoffice.pea.co.th/2564/',
		user: 'Worakrit Soontornthamniti'
	},
	{
		title: 'เว็บไซต์สหกรณ์ออมทรัพย์ กฟภ.',
		url: 'http://www.peacoop.or.th/',
		user: 'Worakrit Soontornthamniti'
	},
	{
		title: 'เว็บไซต์เปลี่ยนแปลงสัดส่วนการลงทุน MFCfund',
		url: 'https://www.mfcfund.com',
		user: 'Worakrit Soontornthamniti'
	},
	{
		title: 'คลังความรู้ กฟต.3 youtube',
		url: 'http://bct.pea.co.th/youtube/',
		user: 'Worakrit Soontornthamniti'
	},
	{
		title: 'ระบบติดตามหนี้ค่าไฟฟ้าค้างชำระ ETSx',
		url: 'http://c2intra.pea.co.th/c2/ETSx_C2',
		user: 'Worakrit Soontornthamniti'
	},
	{
		title: 'ระบบติดตามผล การดำเนินการตามเป้าหมาย OKR',
		url: 'http://okr.pea.co.th/',
		user: 'Worakrit Soontornthamniti'
	},
	{
		title: 'Dashboard ',
		url: 'https://sites.google.com/view/s3-pms/home',
		user: 'Worakrit Soontornthamniti'
	},
	{
		title: 'ระบบบริหารจัดการพัสดุ',
		url: 'https://simp-peadashboard.web.app',
		user: 'Worakrit Soontornthamniti'
	},
	{
		title: 'เว็บไซต์ระบบจดหน่วยผู้ใช้ไฟฟ้ารายใหญ่ที่ไม่ใช่มิเตอร์',
		url: 'https://smr.pea.co.th',
		user: 'Worakrit Soontornthamniti'
	},
	{
		title: 'เว็บไซต์ลงทะเบียน/ตรวจสอบ การขอคืนเงินประกันการใช้',
		url: 'http://cdp.pea.co.th/',
		user: 'Worakrit Soontornthamniti'
	}
];
