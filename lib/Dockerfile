FROM quay.io/maherzubair/sigma-md:beta
RUN git clone https://github.com/Astropeda/Asta-Md /root/Astropeda/Asta-Md
WORKDIR /root/Astropeda/Asta-Md/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
 
 