// Define global variables 
let sectionsObject=document.querySelectorAll('section');
let sectionsKeysArray=Object.keys(sectionsObject);
let sectionLength=sectionsKeysArray.length;
const nav=document.getElementById("n-menu");
const listItem=document.createElement('li');
const unorderList=document.getElementById('n-list');
let sections=Array.from(sectionsObject);
const listSelect=document.querySelectorAll('li');
// to check number of sections if more than or equal four 
function checkSectionNumbers(){
  if (sectionLength>=4){
      return true;
	}
}
// add listItem by calling addItem function 
function addList (){
	// for loop to all element in array sections
    for (var i=0;i<sections.length;i++){
     /* calling function addItem and passing two parameters name of id 
        of elements in array sections 
     */ 
    addItem(sections[i].getAttribute('name'),sections[i].getAttribute('id'));
 }
    }
    // using two arguments to add item listName & linkName 
    function addItem(listName,linkName ){
    	// declare variable name and equal listName argument value ( parameter)
    	 var name=listName;
    /* html line to add anchor link .
       using Template literals (Template Strings) of linkName and name ( listName) .
    */
    var link="<li> <a href=" + `#${linkName} "`+ ">" + `${name}` + "</a> </li>";
    // to insert this html line in list in position before end this list in page 
    listItem.insertAdjacentHTML('beforeend',link);
    // append list after insertion anchor link in the parent element unorder list (ul)
    unorderList.appendChild(listItem);
    }
    // naming select List  class for active list 
   function selectList(){
    const listSelect=document.querySelectorAll('li');
	  for (n=1;n<listSelect.length;n++){
	  var listSelectItem=listSelect[n];
	  // using action listener for clicking list item 
	  listSelectItem.addEventListener("click", function(){
	  removeActiveList();
	  this.classList.add("select-list");
	  this.style.backgroundColor="yellowgreen";
	  // call check function
	  check();
		});
    }
}
// detect index of item list
function check(){
	const listSelect=document.querySelectorAll('li');
	for (n=1;n<listSelect.length;n++){
	  // get class attribute
	 let name=listSelect[n].getAttribute("class");
	 if(name==="select-list"){
     selectElement(n-1);
	    	}
	    }
}
// decting selected Section 
function selectElement(index){
	removeActiveSections();
	if (index === -1){
		index=0;
	}
	else {
		index=index;
	}
        sections[index].classList.add("active-class");
        // style of selected section 
        sections[index].style.backgroundColor="yellowgreen";
}
// remove all of active class in section array 
function removeActiveSections (){
	for (i=0;i<sections.length;i++){
		// remove all active class in section array
	sections[i].classList.remove("active-class");
		sections[i].style.backgroundColor=""; // style after remove  active class in sections 
	}
}
// remove all of slect list in list array 
function removeActiveList (){
  const listSelect=document.querySelectorAll('li');
	for (i=0;i<listSelect.length;i++){                   // for loop 
		// remove all select list 
	listSelect[i].classList.remove("select-list");       
	listSelect[i].style.backgroundColor="orange"; // style of list after removing  select list 
	}
}
// detecting the active section by using intersection observe
function observeElement(){
	// detect options of with root is null 
let options={
	root : null,           // detect root as null
	rootMargin : '0px',
	threshold:0.75        // appear 0.75 of the section
}
// using object from IntersectionObserver with two paramaters 
let observer= new IntersectionObserver( callbackfunc , options);
	for (var i=0;i<sections.length;i++){
	var sectionItem=sections[i];     
	observer.observe(sectionItem);  // observ section items
} 
}
// definition callback function 
function callbackfunc (entries , observer){
	entries.forEach(entry => {
		if(entry.isIntersecting){      // when true
			removeActiveSections();      // remove all active sections with class active class 
			entry.target.setAttribute("class", "active-class"); // set attribut of section to be active class
			entry.target.setAttribute("style", "background-color : yellowgreen"); // set style background color
          	}
});
}
// to add some style (css) 
function addStyle(){
	// anchor links
	const anch=document.querySelectorAll("a");
	for (var i=0;i<anch.length;i++){
		anch[i].style.color="black";
		anch[i].style.padding="5px";
		anch[i].style.textDecoration="none";
	}
	// list items
	const list=document.querySelectorAll("li");
	for (var j=0;j<list.length;j++){
		list[j].style.background="orange";
		list[j].style.margin=4;
		list[j].style.padding="2px";
	}
	// html style 
	const pageContent=document.querySelector('html');
	pageContent.style.scrollBehavior="smooth";
	pageContent.style.margin=0;
	pageContent.style.padding=0;
    // footer style 	
    const footer=document.querySelector('footer');
    // create button to scroll to top in page
    const linktoTop='<button id=button> to Top </button>';
    // insert button inside footer in position after begin 
    footer.insertAdjacentHTML('afterbegin',linktoTop);
    // button style
    const button=document.getElementById('button');
    button.style.border="solid";
    button.style.position="stickly";
    button.style.float="right";
    button.style.background="red";
    button.style.color="white";
}

// setting attributes for section array ( name) 
function settingAttribute(){
	// section number start with value one 
	var sectionNum=1;
	for (var i=0;i<sections.length;i++){
	// detect attribute name by adding number of section (e.g section 2)
	var nameAttribute="section"+sectionNum;
	// setting name attribute in key (name ) in section element
    sections[i].setAttribute('name',nameAttribute);
    sectionNum++;
}
}
// setting attribute for anchor link
function settingAttributeLink(){
	// start with id with value 1
	var id=1;
	// anchor links
	const sectionLink=document.querySelectorAll('a');
	// for loop in anchor link 
	for (var i=0;i<sectionLink.length;i++){
	// detect name by adding id for section ( e.g section 1)
	var attributeId="section"+sectionLink;
	// setting name attribute in key (name) in anchor link element 
    sectionLink[i].setAttribute('name',attributeId);
    id++;
}
}
// setting attribute for section (id)
function settingAttributeId(){
	// section name start with value one 
	var sectionNum=1;
	for (var i=0;i<sections.length;i++){
    // detect attribute name by adding number of section (e.g section 2)
	var idAttribute="section"+sectionNum;
   // setting name attribute in key (id ) in section element
    sections[i].setAttribute('id',idAttribute);
    sectionNum++;
}
}
// scroll page to top 
function toTop(){
	const button=document.getElementById('button');
	// arrow function  
	button.addEventListener("click",()=>{
		// window (x position ,y position );
    window.scrollTo(0,0);
	});
}
// if number of sections more than or equal four (true)
if(checkSectionNumbers()){
     settingAttributeLink();
     settingAttribute();
     settingAttributeId();
     addList();
     addStyle();
     console.log(" There are " + sectionLength + "  sections in your page");
     toTop();
     selectList();
     observeElement();
}
  // if number of sections more than or equal four (false)
  else {
        // alert with message 
	    alert (" attention , this page must have at least four sections ");
}
