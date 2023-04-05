pipeline {
	agent none
  stages {
    stage('Docker Build') {
    	agent any
      steps {
      	sh 'docker build -t flow90/springboot-mongodb-atlas-frontend:latest .'
      }
    }
  }
}