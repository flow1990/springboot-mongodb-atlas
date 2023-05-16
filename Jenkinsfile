pipeline {
    agent any
    stages {
        stage('Build Application'){
            steps{
                script{
                    sh "npm install"
                    sh "ng build"
                }
            }
        }

    stage('Build Docker Container') {
      steps {
      	sh 'sudo docker build -t flow90/springboot-mongodb-atlas-frontend:latest .'
      }
    }

    stage('Deploy Container') {
      steps {
        sh 'suod docker ps -f name=springboot-mongodb-atlas-frontend -q | xargs --no-run-if-empty docker container stop'
        sh 'suod docker container ls -a -fname=springboot-mongodb-atlas-frontend -q | xargs -r docker container rm'
      	sh 'sudo docker run --rm -d -p 8091:80 --name springboot-mongodb-atlas-frontend flow90/springboot-mongodb-atlas-frontend'
      }
    }
  }
}
