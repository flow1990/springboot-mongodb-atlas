pipeline {
    agent any
    tools {
        nodejs "nodejs"
    }
    stages {
        stage('npm install') {
      agent any
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
      agent any
      steps {
      	sh 'docker build -t shanem/spring-petclinic:latest .'
      }
    }
  }
}