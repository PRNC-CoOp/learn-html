let code1 = document.getElementById("code1");
let code2 = document.getElementById("code2");
let code3 = document.getElementById("code3");
let code4 = document.getElementById("code4");
let code5 = document.getElementById("code5");


let code01 = `1. <body>We can directly write texts in body tag from the first chapter but it's not practicle and not a good approach.</body>

2. <p>This is an paragraph tag you can write paragraphs in it. This is a good practice to write simple texts in p tag</p>

3. <h1>This is a heading tag you can write headings in it. This is a good practice to write headings in h tags</h1>

4. <h2>This is a subheading tag you can write subheadings in it. This is a good practice to write subheadings in h2 tags</h2>

5. <h3>This is a subheading tag you can write subheadings in it. This is a good practice to write subheadings in h3 tags</h3>

6. <h4>This is a subheading tag you can write subheadings in it. This is a good practice to write subheadings in h4 tags</h4>

7. <h5>This is a subheading tag you can write subheadings in it. This is a good practice to write subheadings in h5 tags</h5>

8. <h6>This is a subheading tag you can write subheadings in it. This is a good practice to write subheadings in h6 tags</h6>

9. <strong>This is a strong tag you can write strong texts in it. This is a good practice to write strong texts in strong tags</strong>

10. <em>This is a em tag you can write emphasized texts in it. This is a good practice to write emphasized texts in em tags</em>

11. <small>This is a small tag you can write small texts in it. This is a good practice to write small texts in small tags</small>

12. <mark>This is a mark tag you can write marked texts in it. This is a good practice to write marked texts in mark tags</mark>

13. <del>This is a del tag you can write deleted texts in it. This is a good practice to write deleted texts in del tags</del>

14. <ins>This is a ins tag you can write inserted texts in it. This is a good practice to write inserted texts in ins tags</ins>

15. <sub>This is a sub tag you can write subscript texts in it. This is a good practice to write subscript texts in sub tags</sub>

16. <sup>This is a sup tag you can write superscript texts in it. This is a good practice to write superscript texts in sup tags</sup>

17. <abbr>This is a abbr tag you can write abbreviated texts in it. This is a good practice to write abbreviated texts in abbr tags</abbr>

18. <cite>This is a cite tag you can write cited texts in it. This is a good practice to write cited texts in cite tags</cite>

19. <code>This is a code tag you can write code texts in it. This is a good practice to write code texts in code tags</code>

20. <dfn>This is a dfn tag you can write defined texts in it. This is a good practice to write defined texts in dfn tags</dfn>
`
try {

    code1.innerText = code01;
} catch (error) {
    console.log(error);
}


code02 = `1. Links are the connections that tie the web together. To create a link, you use the anchor tag, which is written as <a>. The text you want your visitors to click goes right after this tag, and you must finish it with a closing </a> tag so the browser knows where the link ends.

2. The anchor tag needs a destination. You provide this by adding the href="" attribute inside the opening tag. You place the destination web address inside the quotation marks. For example: <a href="https://www.example.com">Click to visit Example.com</a>.

3. Sometimes you want a link to open in a new browser tab so visitors do not leave your website. You do this by adding the target="_blank" attribute inside the opening tag alongside your href attribute. For example: <a href="https://www.example.com" target="_blank">Visit Example in a new tab</a>

4. To display a picture, you use the image tag, written as <img>. Unlike the link tag, the image tag is self-closing. This means it stands entirely on its own, and you do not need to write a closing </img> tag.

5. The browser needs to know which picture to load. You tell it by adding the src="" attribute, which stands for source, inside the opening tag. You place the exact file name or web address of your picture inside the quotation marks.

6. Every image must include an alt="" attribute. This stands for alternative text and is a brief description of the picture. This is crucial for web accessibility because screen readers read this text aloud to visually impaired users, and it displays on the screen if the image link is broken. For example: <img src="dog.jpg" alt="A happy golden retriever">.

7. You can control how large the picture appears by adding width="" and height="" attributes directly inside the tag. The numbers you place in the quotation marks determine the size of the image in pixels.

8. You can combine these two concepts to create a clickable image, which acts like a visual button. To do this, you place your entire image tag directly between the opening and closing anchor tags for example: <a href="www.example.com"><img src="dog.jpg" alt="A happy golden retriever" width="300" height="200"></a>.

9. When you nest the tags this way, the browser recognizes the entire physical area of the image as the link. When a user clicks anywhere on the picture, they are taken to the destination you set.

10. To build a clickable image, you write the opening link tag with its destination, then the complete image tag with its source and description, and finally the closing link tag. For example: <a href="https://www.example.com"><img src="banner.jpg" alt="Click here for a special offer"></a>`

try {
    code2.innerText = code02;
} catch (error) {
    console.log(error);
}


code03 = `1. Lists help you organize information on your web page neatly and make it easier for visitors to read. There are two main types of lists in HTML: unordered lists, which use bullet points, and ordered lists, which use numbers.

2. To create an unordered list, you start with the unordered list tag, written as <ul>. This opening tag tells the browser that a bulleted list is beginning, and you must close the entire list at the very end with the </ul> tag.

3. The <ul> tag only creates the invisible container for the list. To actually add text, you need to create individual list items using the list item tag, written as <li>.

4. You type your text immediately after the opening <li> tag and finish it with a closing </li> tag. Every single item you want in your list must be wrapped in its own set of these tags.

5. All of your individual <li> items must sit perfectly between the opening <ul> and closing </ul> tags. For example, a short bulleted grocery list looks like this: <ul><li>Milk</li><li>Bread</li></ul>.

6. If the order of your items is important, such as a recipe, a ranking, or step-by-step instructions, you should use an ordered list instead. This automatically numbers your items instead of using plain bullets.

7. To start an ordered list, you use the ordered list tag, written as <ol>. Just like the unordered list, it acts as a container, and you must remember to close it at the very bottom with the </ol> tag.

8. Ordered lists use the exact same <li> tags for their individual items. You do not need to type the numbers yourself the browser is smart enough to automatically count and display them in a 1, 2, 3 sequence for you.

9. For example, to create a numbered set of instructions, you would write: <ol><li>Open the box</li><li>Take out the toy</li></ol>

10. You can also put a list inside of another list, which is called nesting. To do this, you simply start a brand new <ul> or <ol> tag right before you close an existing <li> item.`

try {
    code3.innerText = code03;
} catch (error) {
    console.log(error);
}

code04 = `1. The <div> and <span> tags are essential HTML tools known as containers. They do not change how your text looks on their own, but they group other pieces of code together so you can easily organize and style your website.

2. The <div> tag stands for "division." It is a block-level element, which means it acts like a large invisible box that automatically starts on a new line and pushes the content after it onto the next line.

3. You use the <div> tag to group major sections of your web page together, such as a navigation bar, a photo gallery, or a cluster of paragraphs.

4. To use it, you place your content between the opening and closing tags. For example: <div><h2>My Pets</h2><p>I have two dogs.</p></div>

5. The <span> tag works differently because it is an inline element. It does not start on a new line or create a large box; it only wraps tightly around the exact characters you select, sitting directly inside your existing text.

6. You use the <span> tag when you want to target a very small piece of text, like a single word or a phrase, without breaking the normal flow of your paragraph.

7. To use it, you place the tags immediately around the specific word you want to target. For example: <p>My favorite color is <span>blue</span> today.</p>

8. Because these tags are invisible by default, they are almost always paired with attributes called classes or IDs, which act like name tags for your containers.

9. You add these attributes inside the opening tag, like this: <div class="header-box"> or <span id="warning-text">.

10. Once your containers have names, you can use CSS code later to easily tell the browser to add a border around your "header-box" division or to turn your "warning-text" span bright red.`

try {
    code4.innerText = code04;
} catch (error) {
    console.log(error);
}



code05 = `1. Forms allow you to collect information from visitors on your website, like their name, email address, or a message. To create a form area, you use the form tag, written as <form>, and close it with the </form> tag.

2. Inside your form container, you need to create blank fields for users to type into. You build these using the input tag, written as <input>. Just like the image tag, the input tag stands on its own and does not require a closing tag.

3. Because there are many ways to collect data, you must tell the browser what kind of input to display by adding the type="" attribute. For a standard, single-line text box, you write: <input type="text">

4. A blank box is not very helpful without instructions. To tell the user exactly what to type into the box, you use the label tag, written as <label>. You place your text between the tags, like this: <label>First Name:</label>

5. It is a critical rule to connect your label directly to your input so the browser knows they belong together. You do this by giving the input an id="" attribute, and giving the label a matching for="" attribute.

6. Connected together, it looks like this: <label for="fname">First Name:</label> <input type="text" id="fname">

7. You can easily change the type="" attribute on your input to collect different kinds of data. For instance, using type="password" will automatically hide the characters the user types with dots, and type="checkbox" will create a small box they can check.

8. Once the user fills out their information, they need a way to send it. You create this clickable action using the button tag, written as <button>.

9. The text you want displayed inside the button goes directly between the opening and closing tags. To ensure the button actually sends the data when clicked, you should add the type="submit" attribute. For example: <button type="submit">Submit Form</button>.

10. When you put all of these pieces together, a complete, functioning form looks like this: <form><label for="userEmail">Email Address:</label> <input type="email" id="userEmail"> <button type="submit">Send</button></form>.`

try {
    code5.innerText = code05;
 } catch (error) {
    console.log(error);
}