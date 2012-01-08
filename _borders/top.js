
function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImagesArray(array) {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<array.length; i+=2) {
			document[array[i]].src = array[i+1];
		}
	}
}

function changeImages() {
	changeImagesArray(changeImages.arguments);
}

function toggleImages() {
	for (var i=0; i<toggleImages.arguments.length; i+=2) {
		if (selected == toggleImages.arguments[i])      changeImagesArray(toggleImages.arguments[i+1]);
	}
}

var selected = '';
var preloadFlag = false;
function preloadImages() {
	if (document.images) {
		faulconj_header_01_faulconj_header_05_sel = newImage("_borders/images/faulconj_header_01-faulconj.gif");
		faulconj_header_02_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_02-faulconj.gif");
		faulconj_header_04_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_04-faulconj.gif");
		faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_05-sel.gif");
		faulconj_header_06_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_06-faulconj.gif");
		faulconj_header_08_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_08-faulconj.gif");
		faulconj_header_10_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_10-faulconj.gif");
		faulconj_header_11_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_11-faulconj.gif");
		faulconj_header_12_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_12-faulconj.gif");
		faulconj_header_13_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_13-faulconj.gif");
		faulconj_header_14_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_14-faulconj.gif");
		faulconj_header_15_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_15-faulconj.gif");
		faulconj_header_16_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_16-faulconj.gif");
		faulconj_header_17_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_17-faulconj.gif");
		faulconj_header_18_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_18-faulconj.gif");
		faulconj_header_19_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_19-faulconj.gif");
		faulconj_header_20_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_20-faulconj.gif");
		faulconj_header_21_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_21-faulconj.gif");
		faulconj_header_22_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_22-faulconj.gif");
		faulconj_header_23_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_23-faulconj.gif");
		faulconj_header_24_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_24-faulconj.gif");
		faulconj_header_25_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_25-faulconj.gif");
		faulconj_header_26_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_26-faulconj.gif");
		faulconj_header_27_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_27-faulconj.gif");
		faulconj_header_28_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_28-faulconj.gif");
		faulconj_header_29_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_29-faulconj.gif");
		faulconj_header_30_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_30-faulconj.gif");
		faulconj_header_31_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_31-faulconj.gif");
		faulconj_header_32_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_32-faulconj.gif");
		faulconj_header_33_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_33-faulconj.gif");
		faulconj_header_34_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_34-faulconj.gif");
		faulconj_header_35_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_35-faulconj.gif");
		faulconj_header_36_faulconj_header_05_sel = newImage("_borders/imagesfaulconj_header_36-faulconj.gif");
		preloadFlag = true;
	}
}

function changeImagesArraybot(array) {
	if (document.images && (preloadFlagbot == true)) {
		for (var i=0; i<array.length; i+=2) {
			document[array[i]].src = array[i+1];
		}
	}
}

var preloadFlagbot = false;
function preloadImagesbot() {
	if (document.images) {
		faulconj_footer_01_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_01-faulconj.gif");
		faulconj_footer_02_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_02-faulconj.gif");
		faulconj_footer_04_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_04-faulconj.gif");
		faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_05-sel.gif");
		faulconj_footer_06_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_06-faulconj.gif");
		faulconj_footer_10_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_10-faulconj.gif");
		faulconj_footer_11_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_11-faulconj.gif");
		faulconj_footer_12_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_12-faulconj.gif");
		faulconj_footer_13_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_13-faulconj.gif");
		faulconj_footer_14_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_14-faulconj.gif");
		faulconj_footer_15_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_15-faulconj.gif");
		faulconj_footer_16_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_16-faulconj.gif");
		faulconj_footer_17_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_17-faulconj.gif");
		faulconj_footer_18_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_18-faulconj.gif");
		faulconj_footer_19_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_19-faulconj.gif");
		faulconj_footer_20_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_20-faulconj.gif");
		faulconj_footer_21_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_21-faulconj.gif");
		faulconj_footer_22_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_22-faulconj.gif");
		faulconj_footer_23_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_23-faulconj.gif");
		faulconj_footer_24_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_24-faulconj.gif");
		faulconj_footer_25_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_25-faulconj.gif");
		faulconj_footer_26_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_26-faulconj.gif");
		faulconj_footer_27_faulconj_footer_05_sel = newImage("_border/images/faulconj_footer_27-faulconj.gif");
		preloadFlagbot = true;
	}
}
