FROM ubuntu:latest
RUN apt update -y
RUN apt install maven -y
COPY . .
RUN mvn verify
CMD java -Xmx8m -Xms8m -jar ./target/words.jar
