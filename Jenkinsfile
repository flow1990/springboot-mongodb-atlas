pipeline {
    agent any
    tools {
        nodejs "nodejs"
    }
    stages {
        stage('npm install') {
      steps {
      	sh 'npm install'
      }
    }
        stage('ng build'){
            steps{
                script{
                    sh "ng build"
                }
            }
        }

    stage('Docker Build') {
      steps {
      	sh 'docker build -t flow90/springboot-mongodb-atlas-frontend:latest .'
      }
    }
  }
}