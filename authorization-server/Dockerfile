FROM eclipse-temurin:17-jdk-alpine
RUN apk add --no-cache bash curl tar gzip mariadb-client
WORKDIR /authorization-server
COPY . .
RUN chmod +x mvnw
EXPOSE 9000
ENTRYPOINT ["./mvnw", "spring-boot:run"]