#include<stdio.h>
#include<unistd.h>
#include<time.h>

int main()
{
    printf("\n\n\t\tTime program by Docker:\n\n\n");

    time_t t;

    while (1)
    {
	time(&t);
        printf("\n%s", ctime(&t));
        sleep(1);
    }
    return 0;
}
