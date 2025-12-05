FROM eclipse-temurin:17-jdk-alpine
RUN apk add --no-cache bash curl tar gzip mariadb-client
WORKDIR /resource-server
COPY . .
RUN chmod +x mvnw
EXPOSE 8080
ENTRYPOINT ["./mvnw", "spring-boot:run"]