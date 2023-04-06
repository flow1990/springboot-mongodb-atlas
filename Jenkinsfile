pipeline {
    agent any
    tools {
        nodejs "nodejs"
    }
    stages {
        stage('ng build'){
            steps{
                script{
                    sh "ng build"
                }
            }
        }

    stage('Docker Build') {
      steps {
        sh 'docker kill springboot-mongodb-atlas-frontend'
      	sh 'docker build -t flow90/springboot-mongodb-atlas-frontend:latest .'
      }
    }

    stage('Deploy') {
      steps {
      	sh 'docker run --rm -d -p 8091:80 --name springboot-mongodb-atlas-frontend flow90/springboot-mongodb-atlas-frontend'
      }
    }
  }
}