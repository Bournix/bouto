# pull official base image
FROM python:3.8.3-alpine

# create the appropriate directories
ENV APP_HOME=/usr/src/app
RUN mkdir $APP_HOME
RUN mkdir $APP_HOME/config
RUN mkdir $APP_HOME/media

# set work directory
WORKDIR $APP_HOME

# create the app user
RUN addgroup -S app && adduser -S app -G app

# set environment variables
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies
RUN apk update \
    && apk add libcurl curl-dev python3-dev libc-dev postgresql-dev gcc python3-dev musl-dev libressl-dev musl-dev libffi-dev \
    gfortran build-base py3-numpy py3-pillow freetype-dev libpng-dev openblas-dev g++ \
    libpq jpeg-dev zlib-dev freetype-dev lcms2-dev openjpeg-dev tiff-dev tk-dev tcl-dev

# copy entrypoint-prod.sh
COPY ./entrypoint.sh $APP_HOME

# install dependencies
RUN pip install --upgrade pip
RUN pip install flake8

COPY ./requirements/production.txt .
RUN pip install -r production.txt

# copy project
COPY ./src $APP_HOME

# lint
RUN flake8 --ignore=E501,F401 .

# chown all the files to the app user
RUN chown -R app:app $APP_HOME

# change to the app user
USER app

# run entrypoint.sh
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
