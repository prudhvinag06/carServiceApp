pipeline {
    // The “agent” section configures on which nodes the pipeline can be run. 
    // Specifying “agent any” means that Jenkins will run the job on any of the 
    // available nodes.
		agent any
		
	    environment {
	        docker_hub_credentials = credentials('dockerid')
            // registry = "prudhvinag637/carServiceApp"
            // registryCredential = 'dockerid'
            // dockerImage = ''
        }
    
	stages {
	    stage('Git Pull Frontend Service') {
	       
                steps {
                     dir("front-end") {
                // Get code from a GitHub repository
                // Make sure to add your own git url and credentialsId
				git url: 'https://github.com/prudhvinag06/carServiceApp.git', branch: 'main',
                credentialsId: 'github'
                }
            }
            
        }
        stage('Git Pull Backend Service') {
            
               steps {
                   dir("back-end") {
                // Get code from a GitHub repository
                // Make sure to add your own git url and credentialsId
				git url: 'https://github.com/prudhvinag06/backend-carService.git', branch: 'main',
                credentialsId: 'github'
                }
            }
            
        }
        // stage('Maven Build backend') {
        //     steps {
        //         // Maven build
        //         dir('back-end'){
                 
        //             sh 'mvn clean install -Dmaven.test.skip' 
        //         }
                
        //     }
        // }
        // stage('Building our images') {
        //     steps{
        //         script {
        //             dir('back-end'){
        //               sh 'pwd' 
        //               sh 'docker build -t prudhvinag637/backend-jenkins:latest .'
                       
        //             }
                    
        //             dir('front-end'){
        //                 sh 'pwd'
        //                 sh 'npm install'
        //                 sh 'docker build -t prudhvinag637/frontend-jenkins:latest .'
        //             }
                    
        //           //  
        //         }
        //     }
        // }
        // stage('Deploy image') {
        //   steps {
        //         sh 'echo $docker_hub_credentials_PSW | docker login -u $docker_hub_credentials_USR --password-stdin'
        //         dir("front-end")
        // 		{
        // 			sh 'docker push prudhvinag637/frontend-jenkins:latest'	
        // 		}
        // 		dir("back-end")
        // 		{
        // 			sh 'docker push prudhvinag637/backend-jenkins:latest'	
        // 		}
        //         sh 'docker logout'
        //     }
        // }
        stage('Deploy in Ansible'){
           steps {
                dir("front-end")
        		{
        // 			sh 'ansible-playbook -i hosts playbook.yml'	
       sh 'ansible-playbook playbook.yml -i inventory --extra-vars "ansible_sudo_pass=papputomato" -e "ansible_python_interpreter=/usr/bin/python3"'
    //   sh 'ansible-playbook playbook.yml -i inventory --extra-vars "ansible_sudo_pass=papputomato" -e "ansible_python_interpreter=/usr/bin/python2"'
          //          ansiblePlaybook becomeUser: null, colorized: true, disableHostKeyChecking: true, installation: 'Ansible', inventory: 'inventory', playbook: 'playbook.yml' ,sudoUser: null

        		}
            }
        }
        
    }
}