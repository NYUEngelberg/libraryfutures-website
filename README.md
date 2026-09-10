Testing out contentful and other stuff

```
docker compose run --rm jekyll bundle exec jekyll contentful
```
docker compose exec jekyll npx contentful-cli space generate migration -s qtihywd5r4sl -e master -c product
docker compose exec jekyll npx contentful-cli space migration --space-id qtihywd5r4sl migrations/03-rename-product-to-publication.js
