/*
 * We'll just check if that's present in other place
 * This file tries to trigger more adlbockers
 */
var tinySimpleAdblockDetected = true;

window.addEventListener('DOMContentLoaded', () => {
	var tag = document.createElement("div");
	tag.classList.add("ad");
	tag.classList.add("wrapper");
	tag.style.position = "fixed";
	tag.style.top = "50%";
	tag.style.left = "50%";
	tag.style.width = "auto";
	tag.style.height = "auto";
	tag.style.backgroundColor = "black";
	tag.style.opacity = "0.8";
    tag.style.color = "#ffffff";
	tag.style.textAlign = "center";
	tag.style.zIndex = "9999";
	tag.style.fontFamily = "sans-serif";
	tag.style.fontSize = "16px";
	tag.style.padding = "10px";

	var text = document.createTextNode("This is a fake Ad");
	tag.appendChild(text);

	var img = document.createElement("img");
	img.setAttribute("src", window.tiny_ad.banner);
	img.setAttribute("alt", "Ad Banner");
	tag.appendChild(img);

	var element = document.body.appendChild(tag);
});