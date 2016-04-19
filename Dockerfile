FROM smebberson/alpine-nginx
# https://github.com/smebberson/docker-alpine/tree/master/alpine-nginx

MAINTAINER rhio.kim@gmail.com

# RUN rm -v /etc/nginx/nginx.conf
# COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
# COPY docker/nginx/mime.types /etc/nginx/mime.types

# COPY docker/docker-entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh

COPY build /usr/html/

# VOLUME /var/log/nginx/log

# RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
#    ln -sf /dev/stderr /var/log/nginx/error.log


# ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 80 443

CMD ["/etc/services.d/nginx/run"]