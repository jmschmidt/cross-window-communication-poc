import java.util.UUID

def shellCommandOutput(command) {
  def uuid = UUID.randomUUID()
  def filename = "cmd-${uuid}"
  echo filename
  sh ("${command} > ${filename}")
  def result = readFile(filename).trim()
  sh "rm ${filename}"
  return result
}

// Define branch variable for use throughout pipeline
def clean_branch = env.BRANCH_NAME.toLowerCase().replaceAll("[\\W]|_", "-")
// Docker API URL
def docker_api_url = env.DOCKER_HOST_DHAP_URL
// Docker-specific naming conventions
def docker_image_name = "$clean_branch:latest"
def docker_container_name = "$clean_branch-container"

node {
  def image

  // Print out all environment variables
  sh "env | sort"
  // DEBUG: Will make the site accessible at http://docker.dhap.com:$PORT
  PORT = shellCommandOutput("curl -4 -H \"Accept: text/plain\" http://marshaller-test.dhap.com/api/ports?branch=${env.BRANCH_NAME}").trim()
  sh "echo Received port $PORT from Marshaller"

  stage("checkout code") {
    checkout scm
  }
  stage("build image") {
    docker.withServer("$docker_api_url") {
      // docker build -t foobar:latest .
      image = docker.build("$docker_image_name", "--build-arg BRANCH_NAME=${env.BRANCH_NAME} .")
    }
  }
  stage("host app") {
    docker.withServer("$docker_api_url") {
      sh "echo $env.BRANCH_NAME"
      // docker run -p 8080:80 foobar:latest
      try {
        // Kill the existing container so we can remove it
        sh "docker kill $docker_container_name"
        echo "killed existing container"
      } catch (err) {
        echo "Could not kill container. Continuing."
      }
      try {
        // Remove the old container so we can reuse its name
        sh "docker rm $docker_container_name"
        echo "removed old container"
      } catch (err) {
        echo "Could not remove container. Continuing."
      }

      // Spin up a container with the newest image
      image.run("-p $PORT:80 --name $docker_container_name")
    }
  }
}
