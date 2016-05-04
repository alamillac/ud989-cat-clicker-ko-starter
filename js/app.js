var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('');
    this.nicknames = ko.observableArray(["Tabtab", "T-Bone", "Mr. T", "Tabitha Tab Tabby Catty Cat"]);
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
    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());
