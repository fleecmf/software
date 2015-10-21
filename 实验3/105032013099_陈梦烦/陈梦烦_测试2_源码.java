

class Prime{	
	public static int cNumber(int Nmax){
		if(Nmax<=0){
			System.out.println("请输入一个大于1的数");
			return -1;
		}
		boolean[] isPrime = null;
		try {
			isPrime=new boolean[Nmax+1];
		} catch (NegativeArraySizeException e) {
			System.out.println("数组过大");
			return -1;
		}
			
		for(int i=3;i<=Nmax;i+=2)
			isPrime[i]=true;
		isPrime[2]=true;
		for(int i=3;i<=Math.sqrt(Nmax);i+=2){
			if(isPrime[i]==true){
				for(int j=i*i;j<=Nmax;j+=2*i)
					isPrime[j]=false;
			}
		}
		int primeNum=0;
		for(int i=1;i<=Nmax;i++){
			if(isPrime[i]==true)
				primeNum++;
		}
		return primeNum;
	}				
	public static void main(String[] args){
		System.out.println(cNumber(2147483647));
	}
}
