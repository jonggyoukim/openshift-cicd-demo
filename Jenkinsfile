pipeline {
	agent any
	stages {
		stage('Clone repository') {
			steps {
				sh 'git clone https://github.com/jonggyoukim/openshift-cicd-demo'
				sh 'ls -l'
			}
		}
		stage('Build image') {
			steps {
				sh 'docker build -t jonggyoukim/jenkins-member-app .'
				sh 'docker images'
			}
		}
		stage ('Push image') {
			steps {
				sh 'docker push jonggyoukim/jenkins-member-app'
			}
		}
	}
}
