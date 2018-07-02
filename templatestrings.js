const post = {
  title: "ES6 is awesome",
  author: "Zeo",
  createdDate: "2017-01-01",
  body:
    "ES6 has great new features that makes developers life easy. Go and learn, Rock it !!!"
};
const html = `
<div class="post">
<h2>
  ${post.title}
  <span class="author">[${post.author}]</span>
</h2>
<p class="location">${post.createdDate}</p>
<div class="bio">${post.body}</div>
</div>
`;
console.log(html);
