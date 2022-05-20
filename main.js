const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let container= document.getElementById('container');




posts.forEach((element) =>{

    let post = document.createElement('div');
    post.classList = 'post';
    container.append(post);

    let postHeader = document.createElement('div');
    postHeader.classList = 'post__header';
    post.append(postHeader);

        let post__meta = document.createElement('div');
        post__meta.classList = 'post-meta';
        postHeader.append(post__meta);

            let post__meta__icon = document.createElement('div');
            post__meta__icon.classList = 'post-meta__icon';
            post__meta.append(post__meta__icon);

            let post__meta__data = document.createElement('div');
            post__meta__data.classList = 'post-meta__data';
            post__meta.append(post__meta__data);

                let post__meta__author  = document.createElement('div');
                post__meta__author.classList = 'post-meta__author';
                post__meta__data.append(post__meta__author);

                let post__meta__time  = document.createElement('div');
                post__meta__time.classList = 'post-meta__time';
                post__meta__data.append(post__meta__time);

    let postText = document.createElement('div');
    postText.classList = 'post__text';
    post.append(postText);

    let postImage = document.createElement('div');
    postImage.classList = 'post__image';
    post.append(postImage);

    let postfooter = document.createElement('div');
    postfooter.classList = 'post__footer';
    post.append(postfooter);

})