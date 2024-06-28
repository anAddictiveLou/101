FROM ubuntu
RUN apt-get update
RUN apt-get install -y build-essential
COPY timeDisplay.c /
RUN make timeDisplay
CMD /timeDisplay
