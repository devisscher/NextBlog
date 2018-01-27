
echo $PWD

for file in $PWD/*.svg
  filename=$(basename "$file")
  extension="${filename##*.}"
  filename="${filename%.*}"
  
do
  echo filename
  //svgtoreact "$file" "${file}Icon"
done
