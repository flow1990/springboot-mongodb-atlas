pipeline {
    agent any
    stages {
        stage('Build Application'){
            steps{
                script{
                    sh "ng build"
                }
            }
        }

    stage('Build Docker Container') {
      steps {
      	sh 'docker build -t flow90/springboot-mongodb-atlas-frontend:latest .'
      }
    }

    stage('Deploy Container') {
      steps {
        sh 'docker ps -f name=springboot-mongodb-atlas-frontend -q | xargs --no-run-if-empty docker container stop'
        sh 'docker container ls -a -fname=springboot-mongodb-atlas-frontend -q | xargs -r docker container rm'
      	sh 'docker run --rm -d -p 8091:80 --name springboot-mongodb-atlas-frontend flow90/springboot-mongodb-atlas-frontend'
      }
    }
  }
}
