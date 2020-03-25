FROM maven:3.6.3-jdk-8-slim
WORKDIR /root/
COPY . .
RUN mvn package

FROM openjdk:8-jre-alpine
WORKDIR /var/www/app/
COPY --from=0 /root/target/projetos.jar .
CMD ["java", "-jar", "projetos.jar"]