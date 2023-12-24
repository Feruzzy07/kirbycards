module.exports.index = function(req, res){
    res.render('index');
}
module.exports.signin = function(req, res){
    res.render('signin');
}
module.exports.register = function(req,res){
    res.render('register');
}
module.exports.staff = function(req, res){
    res.render('staff');
}
module.exports.legal = function(req, res){
    res.render('legal');
}
module.exports.mail = function(req, res){
    res.render('mail');
}
module.exports.viewAll = function(req, res, next){
    const cards =[ {
        id: 1,
        name: 'Froggit',
        cost: 2,
        cardimg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAZlBMVEUAAAD///8yMjKGhoZ6enotLS3x8fHn5+ehoaG9vb2urq7W1tZPT0/5+fna2tpcXFxubm6AgIAgICB0dHQ6OjobGxtFRUVVVVWZmZnh4eHFxcUmJiZnZ2c/Pz/Q0NCnp6eOjo4QEBDYnA4nAAAEwUlEQVRoge2ZaRuqLBCG3UJFcanMrVz+/588bCICJlYfzrne9/lkON4hDMMMOs7/+u+ovwhd35hVwqo/AQ9doe6NWSSsBmu0P65st43Gxmx2jQYLK1WJuxVwZt1odu5bq9CZDWaKcoBclR5rVg8EgGIVAlAcsJ+NisbKiotiNRmsXPd2AFf7w5VbWT3fosuMjUmYF1Tl8lgr+0OTaCPHreA7+DIm7dIgKEiyGsxol8z9roqQs3xvaUqFL7cTb8rDtd8wrbHytSGcjGSsgBu0ntQmUHHKXK1Y+xn6zChp28UqOoAr09IK2Iv1fO23weoITh2q6bBuW/id/ITLiKMJu1AVdwNtvjUn4B25agxw4YV08no8HCl9+GENr9mVCS6CGqg43EXkKrWGE8sujgtnmnzwDl5BEomi+gyc9Jw2ubIuWzh7yCfXwxm4FzVkSAK4gccQwhHJP7Fj1Q2gUd8ezhW7B2r4u9j3fAmccuQrKoe/RVpJAR8hN8Zx/FpZw8egJArWfoMOuxvfnx54e+ukwJUEJX1VS7guupHyKOPxkZBF9ufXp3A8pH3CgRnU4ckwDNlbeF+V7o4G5/oSPzKnV+GSzPBx1/6UjPDnodt9Af8Nmnv+VlH3K3g7aNnL/q54Xgp6Z7iVrXw0tEHTc5lk0E9q/oaXJIzjuNyCglhv8+NYf1jepF/aXZL4Wct/OzJ39Vb0SB/sVgTCRSKTSUQToG53qdP0EVnDA3FLmgyR7kiLc81PlcCxB095vmzpm2ipKVq51QwPWZ5QBIU+T2Z4GWDhcA7lB8zw0dANC5Hue0a47C0go9pJYndFnpE7JPVcqxG+luyqPwqIZnjR/LTvQImMvwxcm9hC9Nzd4c6qC0q9MnK/n1ZcPQJkrHWruTrrgKoap6qqvUJ3hFTj/tZuUssfo4njsSxXPte7kweDLt4ZnTkN+YflTb6dyuMTEE358RwyoWOWqsHeEcPddNmsS2pap+HO4o0fl2PkKtNJDt6bb3udtzzYIvKgaf3AyUmjnb6fgJtDI62+s6/hSvbRsfyiJrd6Wk8hNTlEwHrUt3A0OhAtcOeCr0DrNEroRNbwzbwxNxaHEldXLc+ZVWXJnmINPmM4bKIoakgCvT1Y4K93dNzHtX1jpLeZSlDbkKu4G81kD1pcORs9A7fU3whvb4Gqm57gfAg3nZ1Gv4Gj/GGweeX59D0ckJrLexCRs8o7vaJ/pxywfwKnNSFbVcTjuQcyw+E7OJjwoi9iltCTWotFRYTLU7ySggl8A6eF4TJ5oSOHXHpc3H4Dx7wr4kOb08NJUdwgckxf5Z/Dh5GFwQwX5B07e76Imwn5WX8OJ1GWwKf1pvczeM7hQzQu5fQVjuMIfwl3lYha/RaeStvYzPIXBU7qicO9Lg10eNjJu9jcJQY4kX8L3vPloz8C7109c6DDQteAllHWe9wyS5IkVOBzURQ0lsTkbkY/Qs033Eg/dvVPJX9qkywwwrUKevOxjP2rltPqZyamDKnXrGT45LLIOy8nGvvw9XBcKNWyzLC9i7v1yEfTc7t6k+1Dw7mJlmboWaBkQmZwgS8foRZdtAd1uJrYhqXEmH1/Yk5W4Wpm+7G7KrWROYQnqsG+tGx+gf8Bx2pEDKORSJ0AAAAASUVORK5CYII=',
        stat1img: '',
        stat2img: '',
        stat3img: '',
        tribe1img: 'https://static.wikia.nocookie.net/undertale/images/2/2f/Froggit_overworld.png/revision/latest/scale-to-width/360?cb=20211119162319',
        tribe2img: '',
        description: 'This literally just attacks lol',
        dmg: 3,
        rarityimg: 'https://www.pngkey.com/png/full/959-9599829_8bit-heart-undertale-freetoedit-8-bit-love-heart.png',
        hp: 3
    },
        {
            id: 2,
            name: 'Froggit',
            cost: 2,
            cardimg: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAZlBMVEUAAAD///8yMjKGhoZ6enotLS3x8fHn5+ehoaG9vb2urq7W1tZPT0/5+fna2tpcXFxubm6AgIAgICB0dHQ6OjobGxtFRUVVVVWZmZnh4eHFxcUmJiZnZ2c/Pz/Q0NCnp6eOjo4QEBDYnA4nAAAEwUlEQVRoge2ZaRuqLBCG3UJFcanMrVz+/588bCICJlYfzrne9/lkON4hDMMMOs7/+u+ovwhd35hVwqo/AQ9doe6NWSSsBmu0P65st43Gxmx2jQYLK1WJuxVwZt1odu5bq9CZDWaKcoBclR5rVg8EgGIVAlAcsJ+NisbKiotiNRmsXPd2AFf7w5VbWT3fosuMjUmYF1Tl8lgr+0OTaCPHreA7+DIm7dIgKEiyGsxol8z9roqQs3xvaUqFL7cTb8rDtd8wrbHytSGcjGSsgBu0ntQmUHHKXK1Y+xn6zChp28UqOoAr09IK2Iv1fO23weoITh2q6bBuW/id/ITLiKMJu1AVdwNtvjUn4B25agxw4YV08no8HCl9+GENr9mVCS6CGqg43EXkKrWGE8sujgtnmnzwDl5BEomi+gyc9Jw2ubIuWzh7yCfXwxm4FzVkSAK4gccQwhHJP7Fj1Q2gUd8ezhW7B2r4u9j3fAmccuQrKoe/RVpJAR8hN8Zx/FpZw8egJArWfoMOuxvfnx54e+ukwJUEJX1VS7guupHyKOPxkZBF9ufXp3A8pH3CgRnU4ckwDNlbeF+V7o4G5/oSPzKnV+GSzPBx1/6UjPDnodt9Af8Nmnv+VlH3K3g7aNnL/q54Xgp6Z7iVrXw0tEHTc5lk0E9q/oaXJIzjuNyCglhv8+NYf1jepF/aXZL4Wct/OzJ39Vb0SB/sVgTCRSKTSUQToG53qdP0EVnDA3FLmgyR7kiLc81PlcCxB095vmzpm2ipKVq51QwPWZ5QBIU+T2Z4GWDhcA7lB8zw0dANC5Hue0a47C0go9pJYndFnpE7JPVcqxG+luyqPwqIZnjR/LTvQImMvwxcm9hC9Nzd4c6qC0q9MnK/n1ZcPQJkrHWruTrrgKoap6qqvUJ3hFTj/tZuUssfo4njsSxXPte7kweDLt4ZnTkN+YflTb6dyuMTEE358RwyoWOWqsHeEcPddNmsS2pap+HO4o0fl2PkKtNJDt6bb3udtzzYIvKgaf3AyUmjnb6fgJtDI62+s6/hSvbRsfyiJrd6Wk8hNTlEwHrUt3A0OhAtcOeCr0DrNEroRNbwzbwxNxaHEldXLc+ZVWXJnmINPmM4bKIoakgCvT1Y4K93dNzHtX1jpLeZSlDbkKu4G81kD1pcORs9A7fU3whvb4Gqm57gfAg3nZ1Gv4Gj/GGweeX59D0ckJrLexCRs8o7vaJ/pxywfwKnNSFbVcTjuQcyw+E7OJjwoi9iltCTWotFRYTLU7ySggl8A6eF4TJ5oSOHXHpc3H4Dx7wr4kOb08NJUdwgckxf5Z/Dh5GFwQwX5B07e76Imwn5WX8OJ1GWwKf1pvczeM7hQzQu5fQVjuMIfwl3lYha/RaeStvYzPIXBU7qicO9Lg10eNjJu9jcJQY4kX8L3vPloz8C7109c6DDQteAllHWe9wyS5IkVOBzURQ0lsTkbkY/Qs033Eg/dvVPJX9qkywwwrUKevOxjP2rltPqZyamDKnXrGT45LLIOy8nGvvw9XBcKNWyzLC9i7v1yEfTc7t6k+1Dw7mJlmboWaBkQmZwgS8foRZdtAd1uJrYhqXEmH1/Yk5W4Wpm+7G7KrWROYQnqsG+tGx+gf8Bx2pEDKORSJ0AAAAASUVORK5CYII=',
            stat1img: '',
            stat2img: '',
            stat3img: '',
            tribe1img: 'https://static.wikia.nocookie.net/undertale/images/2/2f/Froggit_overworld.png/revision/latest/scale-to-width/360?cb=20211119162319',
            tribe2img: '',
            description: 'This literally just attacks lol',
            dmg: 3,
            rarityimg: 'https://www.pngkey.com/png/full/959-9599829_8bit-heart-undertale-freetoedit-8-bit-love-heart.png',
            hp: 3
        }];
    res.render('crafting', {cards});
}