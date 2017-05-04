for i in "*.md"
do
  sed -i -e "s/```bash/~~~ bash/g" $i
done
