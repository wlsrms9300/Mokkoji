## 빌드 코드 작성 

FROM node:22.14.0 AS build

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

# 환경 변수에 따라 다른 빌드 명령어 실행
ARG BUILD_COMMAND=beta
RUN yarn ${BUILD_COMMAND}

FROM nginx:stable-alpine

# nginx의 기본 설정을 삭제하고 앱에서 설정한 파일을 복사
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

# 위 스테이지에서 생성한 빌드 결과를 nginx의 샘플 앱이 사용하던 폴더로 이동
COPY --from=build /app/${BUILD_FILE} /usr/share/nginx/html

EXPOSE 80

# nginx 실행
CMD [ "nginx", "-g", "daemon off;" ] 