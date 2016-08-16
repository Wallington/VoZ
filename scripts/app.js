
/*********************************************
	AngluarJS ver. 1.4.8
	Author: Sean O'Brien
	Details: This script hold all the controller since 
	script tag does not add groups of Javascript together
	we have create one file which has controller and module 
	in same script.
*********************************************/   



var vozApp = angular.module('vozApp', ['ngMaterial','ui.bootstrap', 'ngAnimate', 'ngAria','ngMessages', 'ngRoute', 'toastr','ngCookies' ])

//define the custome google materials theme

vozApp.config(function($mdThemingProvider)
{
	$mdThemingProvider.definePalette('VOZ',
	{
		'50': 	'ffcc34',
		'100': 	'ffc51a',
		'200': 	'ffd24d',
		'300': 	'ffbf00', //main color
		'400': 	'e6ac00',
		'500': 	'e6ac00', //main color
		'600': 	'e6ac00',
		'700': 	'ffd24d',
		'800':  'ffd24d', //main color
		'900':  '64DD17',
		'A100': 'ffd24d', //main color //warn color
		'A200': '271649', //warn color
		'A400': '441154', //warn color
		'A700': '441154', //acceent color
		'contrastDefaultColor': 'dark',    // whether, by default, text (contrast)
											// on this palette should be dark or light
		'contrastLightColors': ['50', '100', //hues which contrast should be 'dark' by default
		 '200', '300', '400', 'A100'],
		'contrastDarkColors': ['600', '700', //hues which contrast should be 'dark' by default
		 '800', '900', 'A200', 'A400']    // could also specify this if default was 'dark'
	});
	$mdThemingProvider.theme('default').primaryPalette('VOZ');
});


//define the route Provider of our pages.
vozApp.config(function ($routeProvider)
{
	$routeProvider
	
	//define home route.
	.when('/',
	{
		templateUrl : 'pages/home.html',
		controller  : 'homeController'
	})
	
	.when('/about',
	{
		templateUrl : 'pages/about.html',
		controller  : 'aboutController'
	})
	.when('/new',
	{
		templateUrl : 'pages/new.html',
		controller  : 'newController'
	})
	.when('/download',
	{
		templateUrl : 'pages/download.html',
		controller  : 'downloadController'
	})
	.when('/cards',
	{
		templateUrl : 'pages/cards.html',
		controller  : 'cardsController'
	})
	.when('/boards',
	{
		templateUrl : 'pages/boards.html',
		controller  : 'boardsController'
	})
	.when('/support',
	{
		templateUrl : 'pages/support.html',
		controller  : 'supportController'
	})
	.when('/community',
	{
		templateUrl : 'pages/community.html',
		controller  : 'communityController'
	})
	.when('/media',
	{
		templateUrl : 'pages/media.html',
		controller  : 'mediaController'
	})
	.when('/contact',
	{
		templateUrl : 'pages/contact.html',
		controller  : 'contactController'
	})
	
	.when('/founder',
	{
		templateUrl : 'pages/founder.html',
		controller  : 'founderController'
	})
	.when('/founderCheckout',
	{
		templateUrl : 'pages/founderCheckout.html',
		controller  : 'founderCheckoutController'
	})
	.when('/lore',
	{
		templateUrl : 'pages/lore.html',
		controller  : 'loreController'
	})
	.when('/guide',
	{
		templateUrl : 'pages/guide.html',
		controller  : 'guideController'
	});
});
//define the first and secondary nav functions
vozApp.service('Nav', function()
{
	
	this.pageName = '';
	//define the main list and secondary
	this.menuList =
	[
		{
			"name" : "New",
			"url"  : "#/new",
			"disable" : false,
			"subMenu" : 
			[
				{
					"name" : "Cards",
					"achLink" : "cards"
				},
				{
					"name" : "Boards",
					"achLink" : "boards"
				}
			]	
		},
		{
			"name"   	: "about",
			"url"   	: "#/about",
			"disable" : false,
			"subMenu"	:
			[
				{
					"name" : "About",
					"achLink" : "",
					"href" : "#/about#about"
				},
				{
					"name" : "Guide",
					"achLink" : "",
					"href" : "#/guide"
				},
				{
					"name" : "Lore",				
					"achLink" : "",
					"href" : "#/lore"
				}
			]
		},
		{
			"name" : "Cards",
			"url"  : "#/cards",
			"disable" : false,
			"subMenu" : 
			[
				{
					"name" : "Materia",
					"achLink" : "materia"
				},
				{
					"name" : "Terrain",
					"achLink" : "terrain"
				},
				{
					"name" : "Ambush",
					"achLink" : "ambush"
				},
				{
					"name" : "Glyph",
					"achLink" : "glyph"
				},
				{
					"name" : "Spell",
					"achLink" : "spell"
				},
				{
					"name" : "Enchant",
					"achLink" : "enchant"
				},
				{
					"name" : "Minion",
					"achLink" : "minion"
				},
				{
					"name" : "Boss",
					"achLink" : "boss"
				}
			]
			 
		},
		{
			
			"name" : "Boards",
			"url"  : "#/boards",
			"disable" : false,
			"subMenu" :
			[
				{
					"name" : "The Cathedral of Bones",
					"achLink" : "cathedralofbones"
				},
				{
					"name" : "The Blighted Mire",
					"achLink" : "blightedmire"
				}
			] 	
		},
		{
			"name"   	: "community",
			"url"   	: "#/community",
			"disable" : false,
			"subMenu"	:
			[ 
				{
					"name" : "Forums",
					"achLink" : "forums",
					"url" : 'http://forums.visionsofzosimos.net/'
				},
				{
					"name" : "Blog",
					"achLink" : "blog",
					"url": "http://vozdevblog.blogspot.com/"
				},
				{
					"name" : "Fan art",
					"achLink" : "fanArt"
				}
			]	
		},
		{
			"name"   	: "media",
			"url"   	: "#/media",
			"disable" : false,
			"subMenu"	:
			[
				{
					"name" : "News",
					"achLink" : 'news'
				},
				{
					"name" : "Video",
					"achLink" : "video"
				},
				{
					"name" : "Streams",
					"achLink" : "streams"
				},
				{
					"name" : "Wallpaper",
					"achLink" : "wallpaper"
				}
				
			]
		},
		{
			"name"   	: "founder",
			"url"   	: "#/founder",
			"disable" : false,
			"subMenu"	:
			[
				{
					"name" : "Main",
					"achLink" : 'store:main'
				},
				{
					"name" : "Upgrade",
					"achLink" : "store:upgrade"
				},
				{
					"name" : "FAQ",
					"achLink" : "store:faq"
				},
				{
					"name" : "Details",
					"achLink" : "store:rewarddetails"
				}
				
			]
		}
	]; 
	
	//this hold the secondary menu
	this.subMenuList = [];
	
	
	this.OpenNav = function(menuName)
	{
		switch(menuName) //we check the name for match if 
		{
			case 'new':
				this.subMenuList = this.menuList[0].subMenu;
				break;
			case 'about':
				this.subMenuList = this.menuList[1].subMenu;
				break;
			case 'cards':
				this.subMenuList = this.menuList[2].subMenu;
				console.log(this.subMenuList);
				break;
			case 'boards':
				this.subMenuList = this.menuList[3].subMenu;
				
				break;
			case 'community':
				this.subMenuList = this.menuList[4].subMenu;
				
				break;
			case 'media':
				this.subMenuList = this.menuList[5].subMenu;
				
				break;
			case 'founder':
				this.subMenuList = this.menuList[6].subMenu;
				
				break;
			default:
				this.subMenuList ='';
				break;
		}
		
		
	}
});

//define for the shop.
vozApp.service ('Store', function($http, $window,$cookies)
{
	this.item = [];
	this.itemCount = 0;
	
	//this add items to the shoping card
	this.AddItem = function(itemName, itemPrice, elementCodeName)
	{ 	
	  if(this.item.length == 0)  //check if cart has any item start off if not is true
	  {
		 
		 this.item.push
		  (
			  {
				  copy: 1, //how many copy of the founder code
				  name : itemName, //get the name
				  price : itemPrice, //get the price
				  img: elementCodeName //get name of image
			  }
		  );
		  this.itemCount++;  
	  }
	  else //if cart does have item then were see if there duplicated item
	  {
		   for(var i = 0; i < this.item.length; i++)
		   {
			   //console.log("start of loop");
			   //console.log("input name: " + itemName)
			   //console.log("loop name: " + this.item[i].name);
				if(itemName == this.item[i].name)
				{
					//console.log("found duplicates in the loop");
					this.item[i].copy++; //incress the number of copys of this item then break from loop
					//console.log("duplication side");
					this.itemCount++;
					break;
						
				}
				else //if not then like the top where pop new segment into it.
				{
					//console.log("found non duplicates in the loop");
					this.item.push
					(
						{
							copy: 1, //how many copy of the founder code
							name : itemName, //get the name
							price : itemPrice, //get the price
							img: elementCodeName //get name of image
						}
					);
					this.itemCount++;
					break;  	
				}
		   }
		   
	  }
	  
   }
	
	
	 this.CalulateTotal = function()
	  {
		 var totalPrice = 0; //clean total set at zero
		 for(var i = 0; i < this.item.length; i++) //for each item we want get each copy * set cost price
		 {
			 totalPrice += (this.item[i].copy * this.item[i].price);
		 }
		 return totalPrice;
	  }
	 this.UpdateItem = function()
	 {
		 this.itemCount= 0; //clean total set at zero
		 for(var i = 0; i < this.item.length; i++) //for each item we want get each copy * set cost price
		 {
			 this.itemCount += this.item[i].copy;
		 } 
	 }
	
	this.RemoveItem = function(itemId)
	{
		if(this.item.length != 1) //if not last item in list 
		{
			this.item.splice(itemId,1)
		}
		else
		{
			this.item.pop();	
		}
		
	}
	
	
	this.CheckOut = function(method) //method is the key which check out should open and load to proccess the order
	{
		if(method == 'paypal')
		{
			$cookies.putObject('tempItems',this.item);
			$window.open('php/createPayPalPayment.php?items=' + JSON.stringify(this.item), "_self");
		}
	}
	
	this.Clear = function()
	{
		this.item = [];
		this.itemCount = 0;	
	}
});


//define the mainController 
vozApp.controller('mainController',function($scope, $mdSidenav, $window, Nav, $location, $anchorScroll, toastr)
{
	$scope.ToggleRight = function()
	{
		$mdSidenav('right').toggle();	
	}
	$scope.ToggleLeft = function()
	{
		$mdSidenav('left').toggle();	
	}
	$scope.Close = function(direction)
	{
		$mdSidenav(direction).close();
	}
	
	//json the list of each of our social media pages
	$scope.socialList = 
	[
		{
			'icon' : 'fa fa-2x fa-facebook',
			'name' : 'Facebook',
			'url'  : 'https://www.facebook.com/VisionsofZosimos?fref=ts' 
		},
		{
			'icon' : 'fa fa-2x fa-google-plus',
			'name' : 'Google Plus',
			'url'  : 'https://plus.google.com/+VisionsOfZosimosNet' 
		},
		{
			'icon' : 'fa fa-2x fa-tumblr',
			'name' : 'Tumblr',
			'url'  : 'http://visionsofzosimos.tumblr.com/' 
		},
		{
			'icon' : 'fa fa-2x fa-twitter',
			'name' : 'Twitter',
			'url'  : 'https://twitter.com/VoZCCG' 
		},
		{
			'icon' : 'fa fa-2x fa-youtube',
			'name' : 'Youtube',
			'url'  : 'https://www.youtube.com/channel/UCCJeVduLe44tjWt8l5ZZjEw' 
		},
		{
			'icon' : 'fa fa-2x fa-twitch',
			'name' : 'Twitch',
			'url'  : 'https://www.twitch.tv/visionsofzosimos/' 
		}
	];
	
	$scope.Tab = function(url)
	{
		$window.open(url, "_blank");	
	}
	
	var originatorEv;
	
	$scope.OpenMenu = function($mdOpenMenu, event)
	{
		originatorEv = event;
		$mdOpenMenu(event);
	}
	
	$scope.menuList = Nav.menuList;
	
	$scope.openSubNav = function()
	{
		$scope.subMenuList = Nav.subMenuList;
		$scope.isNavOpen = Nav.isNavOpen;
	}
	
	$scope.GoToAch = function(archTag)
	{
		if( archTag == 'forums')
		{
			$window.open('http://forums.visionsofzosimos.net/', "_blank");
		}
		else if(archTag == 'blog')
		{
			$window.open('http://vozdevblog.blogspot.com/', "_blank");
		}
		else
		{
			$location.hash(archTag);
			$anchorScroll();
		}
	}
	
	$scope.GoToTop = function()
	{
		$location.hash('top');
		$anchorScroll();
	}
	
	$scope.CloseLeftMenuAfterClick = function()
	{
		$mdSidenav('left').toggle('close');	
	}
	
	$scope.CloseMenu = function(leftOrRight)
	{
		$mdSidenav(leftOrRight).toggle('close');	
	}
	
	$scope.setToast = function(messageString, type) //simple toast display
	{
		messageString = angular.lowercase(messageString);
		switch(type)
		{
			case 'info':
				toastr.info(messageString, "Server:");
				break;
			case 'error':
				toastr.error(messageString, 'Server Error:')
				break;
			case 'success':
				toastr.success(messageString, "Server:")
			
		}
	}
	
});

/////////////////////////////////////////////
/* Sub pages controllers                   */
/////////////////////////////////////////////

//define the about sub pages Controller
vozApp.controller('homeController', function($scope, $http, Nav, $window)
{
	
	$scope.rand = 0;  
	$scope.survey =
	{
		question  		: '',
		choiceList		: [],
		answer    		: '',
		email 	  		: '',
		timeStamp 		: '' 	
	}
	$scope.server = 
	{
		message : '',
		colorCode : ''	
	}
	
	Nav.OpenNav('home');  //define what page were on
	$scope.openSubNav(); // update the main controller 
	
	//getting data from JSON file
	$http
	(
		{
			medthod: 'GET',
			url: 'surveyQuestion/survey.json'	
		}
	).then(function successCallback(response)
	{
		var maxRandomNumber = response.data.length; //get the length of the JSON array
		$scope.rand = Math.floor((Math.random() * maxRandomNumber)); //choices one of X in the JSON array
		
		$scope.survey.question = response.data[$scope.rand].question;
		$scope.survey.choiceList = response.data[$scope.rand].questionChoices
	},
	function errorCallback(response)
	{
		console.log("ERROR");
	});
	
	$scope.Submit = function(htmlForm)
	{
		if($scope.survey.email.length < 10 || $scope.survey.email == '' || $scope.survey.email.length >= 100)
		{
			return false;	
		}
		else if($scope.survey.answer == '')
		{
			return false;	
		}
		else
		{
			$http
			(
				{
					medthod: 'GET',
					url: 'scripts/sendSurvey.php'
				}
			).then(function successCallback(response)
			{
				$scope.server.colorCode = response.data.colorCode;
				$scope.server.message = response.data.message;
			},
			function errorCallback(response)
			{
				$scope.server.colorCode = 'alert alert-danger';
				$scope.server.message = 'Error: Was not able connect to DB at this time';
			});
		}
		
	}
	
	$scope.OpenTab = function (url)
	{
		$window.open(url, "_blank"); 
	}
		
});

vozApp.controller('homeCarousel', function($scope) //this controlls the home slider
{
	$scope.slides =
	[
		{
			img : 'images/IndieGoGoBanner.jpg',
			outsideSrc : "https://www.indiegogo.com/projects/visions-of-zosimos"
		}, //slide 1
		{
			img : 'images/GenConBanner.jpg',
			outsideSrc : "http://www.gencon.com/"
		}, //slide 2
		{
			img : 'images/greenLightbanner.jpg',
			outsideSrc : "http://steamcommunity.com/sharedfiles/filedetails/?id=509966714"
		}//slide 3, end of slides
	]
	
});

vozApp.controller('guideController', function($scope, $mdMedia, $document, $interval,$timeout, Nav)
{
	Nav.OpenNav('about');
	$scope.openSubNav(); //this render the sub menu
	$scope.serverMessageBool = true;
	$timeout
	(
		function()
		{
			$scope.serverMessageBool = false;
		}, 5000
	);
	$scope.setBook = function()
	{
		//extrating media querrys from Google Matterals API
		//to get the size of said screen and taken lowest to maxium
		//the veiws siad smaller screens.
		if($mdMedia('xl'))
		{
			$("#flipbook-xl").turn
			(
				{
					width: 1864,
					height: 1242	
				}
			);
			
		}
		else if ($mdMedia('lg'))
		{
			$("#flipbook-lg").turn
			(
				{
					width: 1224,
					height: 792	
				}
			);
		}
		else if ($mdMedia('md'))
		{
			$("#flipbook-md").turn
			(
				{
					width: 943,
					height: 611	
				}
			);
		}
		else if ($mdMedia('sm'))
		{
			$("#flipbook-sm").turn
			(
				{
					width: 600,
					height: 388	
				}
			);
		}
		else
		{
			return null;	
		}
	}
	
	$scope.setBook();
	
	
	
	
	
});

vozApp.controller('loreController', function($scope, $mdMedia, $document, $interval,$timeout, Nav)
{
	
	Nav.OpenNav('about');
	$scope.openSubNav(); //this render the sub menu
	
	$scope.serverMessageBool = true;
	$timeout
	(
		function()
		{
			$scope.serverMessageBool = false;
		}, 5000
	);
	$scope.setBook = function()
	{
		//extrating media querrys from Google Matterals API
		//to get the size of said screen and taken lowest to maxium
		//the veiws siad smaller screens.
		if($mdMedia('xl'))
		{
			$("#flipbook2-xl").turn
			(
				{
					width: 1064,
					height: 825	
				}
			);
			
		}
		else if ($mdMedia('lg'))
		{
			$("#flipbook2-lg").turn
			(
				{
					width: 1064,
					height: 825	
				}
			);
		}
		else if ($mdMedia('md'))
		{
			$("#flipbook2-md").turn
			(
				{
					width: 943,
					height: 692	
				}
			);
		}
		else if ($mdMedia('sm'))
		{
			$("#flipbook2-sm").turn
			(
				{
					width: 600,
					height: 441	
				}
			);
		}
		else
		{
			return null;	
		}
	}
	
	$scope.setBook();
	
	
	
	
	
});

vozApp.controller('downloadController', function($scope, $http,$location)
{
	$scope.showMessage = false;
	$scope.request =
	{
		name : '',
		email : '',
	};
	
	$scope.serverFeedback = "alert"; //were define default css so when $http done it will either add alert-success or alert-danger
	$scope.serverMessage;// were get error message back from server was successful or fail send data
	
	
	$scope.Submit = function(htmlForm)
	{
		$http
		(
			{
				medthod: 'GET',
				url: 'scripts/sendAlphaKeys.php?email=' + $scope.request.email + "&name=" + $scope.request.name
			}
		).then(function successCallback(response)
		{
			$scope.setToast(response.data[0].message,response.data[0].type);	
		},
		function errorCallback(response)
		{
			$scope.setToast("ERROR could not load web code ID=" + response.status,'error');
		});
	}
	
});


//define the contact sub pages Controller


vozApp.controller('newController', function($scope, Nav, $location)
{
	Nav.OpenNav('new');
	$scope.openSubNav(); //this render the sub menu
	
});

vozApp.controller('aboutController', function($scope, Nav, $location)
{
	Nav.OpenNav('about');
	$scope.openSubNav(); //this render the sub menu
	
});

vozApp.controller('cardsController', function($scope, Nav, $location)
{
	Nav.OpenNav('cards');
	$scope.openSubNav(); //this render the sub menu
	
});
vozApp.controller('boardsController', function($scope, Nav, $location)
{
	Nav.OpenNav('boards');
	$scope.openSubNav(); //this render the sub menu
	
});



vozApp.controller('communityController', function($scope, Nav, $location)
{
	Nav.OpenNav('community');
	$scope.openSubNav();
		
});


vozApp.controller('mediaController', function($scope, Nav, $http, $window)
{
	Nav.OpenNav('media');
	$scope.openSubNav();
	
	$scope.wallpaperList =
	[
		{
			name: "Assassin",
			img: "images/wallpaper/icon/Assassin_icon.jpg",
			url: "images/wallpaper/Assassin.jpg"	
		},
		{
			name: "Soothsayer",
			img: "images/wallpaper/icon/Soothsayer_icon.jpg",
			url: "images/wallpaper/Soothsayer.jpg"	
		},
		{
			name: "Eldjatnor",
			img: "images/wallpaper/icon/Eldjatnor_icon.jpg",
			url: "images/wallpaper/Eldjatnor.jpg"	
		},
		{
			name: "InfernalFootSoldier",
			img: "images/wallpaper/icon/InfernalFootSoldier_icon.jpg",
			url: "images/wallpaper/InfernalFootSoldier.jpg"	
		},
		{
			name: "VisionTrailer_10",
			img: "images/wallpaper/icon/VisionTrailer_10_icon.jpg",
			url: "images/wallpaper/VisionTrailer_10.jpg"	
		},
		{
			name: "VisionTrailer_19",
			img: "images/wallpaper/icon/VisionTrailer_19_icon.jpg",
			url: "images/wallpaper/VisionTrailer_19.jpg"	
		}
	];
	
	$scope.Download = function(image)
	{
		$window.open(image, "_blank");
	}
	
});

vozApp.controller('supportController', function($scope, Nav, $location)
{
	Nav.subMenuList = 
	[
		{
			"name" : "Server",
			"achLink" : 'server'
		},
		{
			"name" : "Patches",
			"achLink" : "patches"
		}
	];
	$scope.openSubNav();
		
});


vozApp.controller('contactController', function($scope, Nav, $mdDialog, $interval, $location, $window)
{
	
	$scope.OpenPartnerModel = function()
	{
		$mdDialog.show
		(		
			{
				templateUrl: 'emailModal.html',
				controller: 'partnerController',
				parent: angular.element(document.body),
				targetEvent : event,
				clickOutsideToClose: true
			}
		).then(function (email)
		{
			$http
			(
				{
					medthod: 'GET',
					url: 'scripts/sendEmail.php?name=' + email.name + "&email=" + email.email + "&subject=" + email.subject + "&message=" + email.message
				}
			).then(function successCallback(response)
			{
				$scope.setToast(response.data[0].serverMessage, response.data[0].type);
			},
			function errorCallback(response)
			{
				
				$scope.setToast(response.data[0].serverMessage, 'error');
				
			});
		}, function()
		{
			//if this was cancel or click off the box this function active
			$scope.setToast("Your data been discard", 'info');
		});
	}
	
	Nav.subMenuList = 
	[
		{
			"name" : "Email",
			"href" : "#/contact?emailOpen=true" 
		},
		{
			"name" : "Partners",
			"achLink" : "partners" 
		},
		{
			"name" : "FAQ's",
			"achLink" : "faq"
		}
	];
	$scope.openSubNav(); //this render the sub menu
	
	
		if($location.search().emailOpen)
		{
			$mdDialog.show
			(		
				{
					templateUrl: 'emailModal.html',
					controller: 'emailController',
					parent: angular.element(document.body),
					targetEvent : event,
					clickOutsideToClose: true
				}
			).then(function (email)
			{
				$http
				(
					{
						medthod: 'GET',
						url: 'scripts/sendEmail.php?name=' + email.name + "&email=" + email.email + "&subject=" + email.subject + "&message=" + email.message
					}
				).then(function successCallback(response)
				{
					$scope.setToast(response.data[0].serverMessage, response.data[0].type);
					
					
				},
				function errorCallback(response)
				{
					
					$scope.setToast(response.data[0].serverMessage, 'error');
					
				});
				$window.location.href ="#/contact";
			}, function()
			{
				//if this was cancel or click off the box this function active
				$scope.setToast("Your data been discard", 'info');
				$window.location.href ="#/contact";
			});
				
		}
		
		
	
	
});



//define the founder page Controller
vozApp.controller('founderController', function($scope, $http, $uibModal, Store ,$interval,Nav, $location, $window)
{	
	Nav.OpenNav('founder');  //define what page were on
	$scope.openSubNav(); // update the main controller 
		
	$interval
	(
		function()
		{
			if($scope.itemCounter > 0)
			{
				$scope.checker = false;	
			}
			else
			{
				$scope.checker = true;
			}
			$scope.itemCounter = Store.itemCount;
		}, 1000 / 60
	);
	$scope.AddToCart = function(name, price, elementCodeName)
	{
		$scope.setToast("Item been add to cart.",'info');
		Store.AddItem(name,price,elementCodeName);
		$scope.itemCounter = Store.item.length;	
	}
	
	$http
	(
		{
			medthod: 'GET',
			url: 'json/founderTiers.json',
			headers: 
			{
        		'Content-Type': 'application/json', 
        		'Accept': 'application/json' 
   			}	
		}
	).then(function successCallback(response)
	{
		$scope.tiers = response.data;
	},
	function errorCallback(response)
	{
		console.log('error: ' + response.status );
	});
	
	
	$scope.ToggleDetail = function(id)
	{
		console.log($scope.tiers[id]);
		$uibModal.open
		(
			{
				animation: true,
				templateUrl: 'teirModal.html',
				 controller: 'teirModalController',
				size: 'lg',
				resolve: 
				{
					teir : function()
					{
						return $scope.tiers[id];	
					}
				}
			}
		);
	}
	
	$scope.ToggleCart = function()
	{
		
		$uibModal.open
		(
			{
				animation: true,
				templateUrl: 'cartModal.html',
				 controller: 'cartModalController',
				size: 'lg'
			}
		);
	}
	
	$scope.CheckOut = function()
	{
		$uibModal.open
		(
			{
				animation: true,
				templateUrl: 'paymentOptionModal.html',
				 controller: 'paymentOptionModalController',
				size: 'lg'
			}
		);
	}
	
	if($location.search().paypalSuccess != null && $location.search().paymentId != null && $location.search().PayerID != null)
	{
		$window.location.href = "#/founderCheckout?paypalSuccess=" + $location.search().paypalSuccess + "&paymentId=" + $location.search().paymentId + "&PayerID=" + $location.search().PayerID
	}
	
	
	$scope.payment = $location.search().payment
	
	if($scope.payment == 'success')
	{
		$scope.setToast("Thank you, Purchaing Your Founder Pack!",'success');
	}
	else if($scope.payment == 'canceled')
	{
		$scope.setToast("Proccess was canceled",'info');
	}
	else if($scope.payment == 'error')
	{
		$scope.setToast("Payment did not go though. Please try again.",'error');
	}
		
	
	
});


vozApp.controller('teirModalController', function ($scope, $uibModalInstance, teir, Store) //if they were look at more details on that teir
{

 	$scope.selectedTeir = teir;
	
	$scope.AddToCart = function(name,price,elementName)
	{
		Store.AddItem(name,price,elementName);
		$uibModalInstance.dismiss('cancel');
	}
	

	 $scope.Cancel = function () 
	 {
		$uibModalInstance.dismiss('cancel');
	 };
});
vozApp.controller('cartModalController', function ($scope, $uibModalInstance, Store, $interval, $uibModal) //shoping cart of all the items
{
	 $scope.itemLists = Store.item ;
	 $interval(function()
	 {
		 if($scope.numItem > 0)
			{
				$scope.checker = false;	
			}
			else
			{
				$scope.checker = true;
			}
		 $scope.total = Store.CalulateTotal();
		 Store.UpdateItem();
	     $scope.numItem = Store.itemCount;
	 },1000 / 60);
	 
	 $scope.Cancel = function () 
	 {
		$uibModalInstance.dismiss('cancel');
	 };
	 
	 $scope.DeleteItem = function(id)
	 {
		Store.RemoveItem(id);
	 };
	 
	 $scope.CheckOut = function()
	{
		$uibModal.open
		(
			{
				animation: true,
				templateUrl: 'paymentOptionModal.html',
				 controller: 'paymentOptionModalController',
				size: 'lg'
			}
		);
		Store.CheckOut(method); 
		$uibModalInstance.dismiss('close');
		Store.Clear();
	}
	 
});

vozApp.controller('ceditCardPaymentController', function ($scope, $uibModalInstance, Store, $interval) //selecting payment
{
	 $scope.Cancel = function () 
	 {
		$uibModalInstance.dismiss('cancel');
	 };
	 
	 $scope.CheckOutWith = function(method)
	 {
		Store.CheckOut(method); 
		$uibModalInstance.dismiss('close');
		Store.Clear();
	 };
	 
});

vozApp.controller('paymentOptionModalController', function ($scope, $uibModalInstance, Store, $interval, $uibModal) //selecting payment
{
	 $scope.Cancel = function () 
	 {
		$uibModalInstance.dismiss('cancel');
	 };
	 
	 $scope.CheckOutWith = function(method)
	 {
		Store.CheckOut(method); 
		$uibModalInstance.dismiss('close');
		Store.Clear();
	 };
	 
	 $scope.disableSend = true;
	 
	 /*$scope.openCard = function()
	 {
		$uibModalInstance.dismiss('close');
			
		$uibModal.open
		(
			{
				animation: true,
				templateUrl: 'ceditCard.html',
				 controller: 'ceditCardPaymentController',
				size: 'lg',
				resolve: 
				{
					
				}
			}
		);
			
		
	 }*/
	 
});

vozApp.controller('emailController', function ($scope, $mdDialog) //selecting payment
{
	 //cencel also form of close the 
	 $scope.Cancel = function () 
	 {
		$mdDialog.cancel();
	 };
	
	$scope.code = 
	[
		"One",
		"Two",
		"Three",
		"Four",
		"Five",
		"Six",
		"Seven",
		"Eight",
		"Nine",
		"Ten"
	];
	
	$scope.disableSend = false;
	
	$scope.answerCodeA = (Math.floor(Math.random() * 10) + 1);
	$scope.answerCodeB = (Math.floor(Math.random() * 10) + 1);
	
	$scope.serverCodeA = $scope.code[ $scope.answerCodeA - 1];
	$scope.serverCodeB = $scope.code[ $scope.answerCodeB - 1];
	
	$scope.email =
	{
		email : '',
		name: '',
		subject : '',
		message : '',
		code: ''
	};
	
	$scope.serverFeedback = ""; //were define default css so when $http done it will either add alert-success or alert-danger
	$scope.serverMessage = ''; // were get error message back from server was successful or fail send data
	
	$scope.Submit = function(htmlForm)
	{
		$scope.serverMessage = "Creating Email...";
		$scope.serverFeedback = "alert alert-info";
		$scope.showMessage = true;
		//checking if the code system is right if not we give new set of number 
		if($scope.email.code == ($scope.answerCodeA + $scope.answerCodeB))
		{
			$mdDialog.hide($scope.email); 
		}
		else
		{
			$scope.serverFeedback = "alert alert-danger";
			$scope.serverMessage = "Opps not right answer";	
			
		}
	}
	
	 
});
vozApp.controller('partnerController', function ($scope, $mdDialog) //selecting payment
{
	 //cencel also form of close the 
	 $scope.Cancel = function () 
	 {
		$mdDialog.cancel();
	 };
	
	$scope.code = 
	[
		"One",
		"Two",
		"Three",
		"Four",
		"Five",
		"Six",
		"Seven",
		"Eight",
		"Nine",
		"Ten"
	];
	
	$scope.disableSend = false;
	
	$scope.answerCodeA = (Math.floor(Math.random() * 10) + 1);
	$scope.answerCodeB = (Math.floor(Math.random() * 10) + 1);
	
	$scope.serverCodeA = $scope.code[ $scope.answerCodeA - 1];
	$scope.serverCodeB = $scope.code[ $scope.answerCodeB - 1];
	
	$scope.email =
	{
		email : '',
		name: '',
		subject : 'Partnership',
		message : '',
		code: ''
	};
	
	$scope.serverFeedback = ""; //were define default css so when $http done it will either add alert-success or alert-danger
	$scope.serverMessage = ''; // were get error message back from server was successful or fail send data
	
	$scope.Submit = function(htmlForm)
	{
		$scope.serverMessage = "Creating Email...";
		$scope.serverFeedback = "alert alert-info";
		$scope.showMessage = true;
		//checking if the code system is right if not we give new set of number 
		if($scope.email.code == ($scope.answerCodeA + $scope.answerCodeB))
		{
			$mdDialog.hide($scope.email); 
		}
		else
		{
			$scope.serverFeedback = "alert alert-danger";
			$scope.serverMessage = "Opps not right answer";	
			
		}
	}
	
	 
});

vozApp.controller('founderCheckoutController', function($scope, $cookies, $http, $location, $window)
{
	$scope.itemLists = $cookies.getObject('tempItems');
	//console.log($scope.itemLists);
	$scope.emailFilledIn = false;
	
	for(var mI = 0; mI < $scope.itemLists.length; mI++)
	{
		if($scope.itemLists[mI].copy > 1)
		{
			for(var itemIndex = 0; itemIndex < ($scope.itemLists[mI].copy - 1); itemIndex++)
			{
				$scope.itemLists.push({"copy": 1, "img": $scope.itemLists[mI].img, "name": $scope.itemLists[mI].name, "price" : $scope.itemLists[mI].price});
				$scope.itemLists[mI].copy--; 
			}
		}
	}
	
	$scope.OnChange = function()
	{
		for(var mI = 0; mI < $scope.itemLists.length; mI++)
		{
			if($scope.itemLists[mI].email != null || $scope.itemLists[mI].email != '')
			{
				$scope.emailFilledIn = true;
			}
			else
			{
				break;	
			}
		}	
	}
	
	$scope.ExecutePayment = function()
	{
		
		if($location.search().paypalSuccess && $scope.emailFilledIn)
		{
			$http
			(
				{
					medthod: 'GET',
					url: 'php/executePayment.php?paymentId=' + $location.search().paymentId + "&PayerID=" + $location.search().PayerID
				}
			).then(function successCallback(response)
			{
				if(response.data != 400)
				{
					for(var i = 0; i < $scope.itemLists.length; i++)
					{
						$http
						(
							{
								medthod: 'GET',
								url: 'scripts/insertReserveItem.php?packName=' + $scope.itemLists[i].name + '&emailTo=' + $scope.itemLists[i].email
							}
						).then(function successCallback(response)
						{
							
						},
						function errorCallback(response)
						{
							
							$scope.setToast(response.stats, 'error');
							
						});	
					}
					$window.location.href = "#/founder?payment=success";
				}
				else
				{
					$window.location.href = "#/founder?payment=failed";
				}
				
				
			},
			function errorCallback(response)
			{
				
				$scope.setToast(response.satus, 'error');
				
			});
		}
		else
		{
			$scope.setToast("Please enter all email to which will be send code to", 'error');	
		}
	}
	
	$scope.CancelPayment = function()
	{
		$window.location.href = "#/founder?payment=canceled";	
	}
});