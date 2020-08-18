FROM nginx:alpine
LABEL author="Vijay Kumar"
COPY ./dist/todo-app-ta /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT ["nginx","-g","daemon off;"]
