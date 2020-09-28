var constants = {
	indexToCategoryMap: {
		0: 'tech',
		1: 'travel',
		2: 'cupid_tales'
	},

	allBlogCategoryData: {
		tech: [{
			title: "Scaling subscriptions at Hostar",
			thumbnailUrl: "resources/img/blog/blog_tech_scaling_subscriptions.jpg",
			publishedOn: "Jun 19, 2020",
			deeplink: "https://blog.hotstar.com/scaling-subscriptions-cache-for-cash-4c5836bd6a6f"
		},
		{
			title: "Setting up Master and Slave Datasources in Spring",
			thumbnailUrl: "resources/img/blog/blog_tech_spring_master_slave_datasources.jpg",
			publishedOn: "Dec 30, 2019",
			deeplink: "https://medium.com/swlh/a-complete-guide-to-setting-up-multiple-datasources-in-spring-8296d4ff0935"
		}],

		travel: [{
			title: "The Queen of all hills - Ooty (Day 3/3)",
			thumbnailUrl: "resources/img/blog/blog_travel_ooty.jpg",
			publishedOn: "Jan 27, 2020",
			deeplink: "https://www.tripoto.com/coonoor/trips/the-queen-of-all-hills-ooty-day-3-3-5e895475241da"
		},
		{
			title: "The Road to Pykara (Day 2/3)",
			thumbnailUrl: "resources/img/blog/blog_travel_pykara.jpg",
			publishedOn: "Jan 26, 2020",
			deeplink: "https://www.tripoto.com/coonoor/trips/the-road-to-pykara-day-2-3-5e6e48bcd2e07"
		},
		{
			title: "The serenity of Coonoor (Day 1/3)",
			thumbnailUrl: "resources/img/blog/blog_travel_coonoor.jpg",
			publishedOn: "Jan 25, 2020",
			deeplink: "https://www.tripoto.com/coonoor/trips/the-serenity-of-coonoor-day-1-3-5e51846ec6ca9"
		},
		{
			title: "Road trip - Rishikesh (1/2)",
			thumbnailUrl: "resources/img/blog/blog_travel_rishikesh_1.jpg",
			publishedOn: "Nov 15, 2019",
			deeplink: "https://www.tripoto.com/uttarakhand/trips/road-trip-rishikesh-1-2-5dd6c74ec01a2"
		},
		{
			title: "Yeh Hai Mumbai Meri Jaan!",
			thumbnailUrl: "resources/img/blog/blog_travel_mumbai.jpg",
			publishedOn: "Sep 28, 2019",
			deeplink: "https://www.tripoto.com/lonavala/trips/yeh-hai-mumbai-meri-jaan-5d94c81e68ab6"
		},
		{
			title: "Varkala - A soulful journey",
			thumbnailUrl: "resources/img/blog/blog_travel_varkala.jpg",
			publishedOn: "Jan 25, 2019",
			deeplink: "https://www.tripoto.com/varkala/trips/varkala-a-soulful-journey-5c5f20e6d0084"
		}],

		cupid_tales: [{
			title: "The late night date",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_late_night_date.gif",
			publishedOn: "Aug 22, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/08/the-late-night-date.html"
		},
		{
			title: "Dawn To Dark",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_dawn_to_dark.gif",
			publishedOn: "Aug 10, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/08/dawn-to-dark.html"
		},
		{
			title: "Homecoming",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_homecoming.gif",
			publishedOn: "Jul 22, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/07/homecoming.html"
		},
		{
			title: "Occupational hazards",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_occupational_hazards.gif",
			publishedOn: "Jul 15, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/07/occupational-hazards.html"
		},
		{
			title: "10 Days to go",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_10_days.gif",
			publishedOn: "Jul 12, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/07/10-days-to-go.html"
		},
		{
			title: "The Lucky Charm",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_lucky_charm.jpg",
			publishedOn: "Jul 07, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/07/the-lucky-charm.html"
		},
		{
			title: "Autocowrecks!!",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_autocowrecks.gif",
			publishedOn: "Jun 29, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/06/autocowrecks.html"
		},
		{
			title: "They are not talking!",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_not_talking.gif",
			publishedOn: "Jun 24, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/06/they-are-not-talking.html"
		},
		{
			title: "That slice of pizza",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_slice_of_pizza.gif",
			publishedOn: "Jun 19, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/06/that-slice-of-pizza.html"
		},
		{
			title: "The little things she does #2",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_little_things_2.gif",
			publishedOn: "Jun 16, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/06/the-little-things-she-does-2.html"
		},
		{
			title: "The Sweet Almonds",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_sweet_almonds.gif",
			publishedOn: "Jun 14, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/06/the-sweet-almonds.html"
		},
		{
			title: "House or home?",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_house_home.gif",
			publishedOn: "Jun 10, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/06/house-or-home.html"
		},
		{
			title: "Now and Then",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_now_then.gif",
			publishedOn: "Jun 04, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/06/now-and-then.html"
		},
		{
			title: "The Best",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_the_best.gif",
			publishedOn: "May 27, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/05/the-best.html"
		},
		{
			title: "The little things she does #1",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_little_things_1.gif",
			publishedOn: "May 20, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/05/the-little-things-she-does.html"
		},
		{
			title: "Stupid or cupid?",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_stupid_cupid.gif",
			publishedOn: "May 16, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/05/stupid-or-cupid.html"
		},
		{
			title: "The second woman",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_other_woman.gif",
			publishedOn: "May 14, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/05/the-second-woman.html"
		},
		{
			title: "The day he sang!",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_battu_sings.gif",
			publishedOn: "May 13, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/05/the-day-he-sang.html"
		},
		{
			title: "The Final Goodbye?",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_final_goodbye.gif",
			publishedOn: "May 11, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/05/the-final-goodbye_11.html"
		},
		{
			title: "The worried girlfriend",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_worried_girlfriend.gif",
			publishedOn: "May 10, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/05/the-worried-girlfriend.html"
		},
		{
			title: "And he met her!",
			thumbnailUrl: "resources/img/blog/blog_cupid_tales_he_met_her.gif",
			publishedOn: "May 10, 2017",
			deeplink: "https://thecupidtales.blogspot.com/2017/05/and-he-met-her.html"
		}]
	},

	blogPostsPerSlide: 4,
	infoModalTimeout: 4000
}