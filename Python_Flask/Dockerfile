# Base image
FROM python:latest
# Set working directory
WORKDIR /app
# Copy files
COPY *.py /app
COPY templates/ /app/templates
#COPY requirements.txt /app
# Install dependencies
RUN pip install Flask
#RUN pip install -r requirements.txt
# Run the application
EXPOSE 5000
#CMD ["/bin/bash"]
CMD ["flask", "run", "--host=0.0.0.0","--reload"]