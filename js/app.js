var initialCats = [
    {
        clickCount: 0,
        name: "Tabby",
        imgSrc: "img/434164568_fea0ad4013_z.jpg",
        nicknames: ["Tabtab", "T-Bone", "Mr. T", "Tabitha Tab Tabby Catty Cat"]
    },
    {
        clickCount: 0,
        name: "Tiger",
        imgSrc: "img/1413379559_412a540d29_z.jpg",
        nicknames: ["Tabtab", "T-Bone", "Mr. T", "Tabitha Tab Tabby Catty Cat"]
    },
    {
        clickCount: 0,
        name: "Scaredy",
        imgSrc: "img/22252709_010df3379e_z.jpg",
        nicknames: ["Tabtab", "T-Bone", "Mr. T", "Tabitha Tab Tabby Catty Cat"]
    },
    {
        clickCount: 0,
        name: "Shadow",
        imgSrc: "img/9648464288_2516b35537_z.jpg",
        nicknames: ["Tabtab", "T-Bone", "Mr. T", "Tabitha Tab Tabby Catty Cat"]
    },
    {
        clickCount: 0,
        name: "Sleepy",
        imgSrc: "img/4154543904_6e2428c421_z.jpg",
        nicknames: ["Tabtab", "T-Bone", "Mr. T", "Tabitha Tab Tabby Catty Cat"]
    }
];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable('');
    this.nicknames = ko.observableArray(data.nicknames);
    this.level = ko.computed(function() {
        console.log("Funcion ejecutada");
        var level = "Teen";
        if(this.clickCount() < 10) {
            level = "Newborn";
        } else if (this.clickCount() < 100) {
            level = "Infant";
        }
        return level;
    }, this);
};

var ViewModel = function() {
    var self = this;
    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.changeCurrentCat = function(cat) {
        self.currentCat(cat);
    };
}

ko.applyBindings(new ViewModel());
