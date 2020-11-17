# graphbom-ui

# Docker build image
docker build . -t graphbom/ui

#Docker run image
docker run -it --rm -p4200:4200 graphbom/ui
